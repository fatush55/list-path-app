import { makeAutoObservable, onBecomeObserved } from 'mobx';

import { PathItem, LoaderInterdface } from 'types';
import filterSearchPath from 'utils/filterSearchPath';
import sortFavoritePath from 'utils/sortFavoritePath';
import searchStore from 'store/Search';
import httpClient from 'lib/httpClient';
import { pathsRoute } from 'lib/apiRouter';

export interface PathsInterface extends LoaderInterdface {
	activeId: string;
	paths: PathItem[];
	addPath: PathItem;
	initPath: PathItem[];
	featchPaths: () => void;
	lenghtPath: number;
	pathIndex: (index: number) => PathItem;
	pathId: (id: string) => PathItem | undefined;
	active: string;
	removePath: string;
	addFavirite: string;
	removeFavirite: string;
	activePath: PathItem | null;
}

class Paths implements PathsInterface {
	paths = [] as PathItem[];
	loading = false;
	activeId = '';
	
	constructor() {
		makeAutoObservable(this, {}, {
			autoBind: true,
		});
		
		onBecomeObserved(this, 'paths', this.featchPaths);
	}
	
	set active(id: string) {
		this.activeId = id;
	}
	
	set addFavirite(idFavorite: string) {
		const index = this.paths.findIndex(({ id }) => id === idFavorite);
		
		this.paths[index].favorite = true;
	}
	
	set removeFavirite(idFavorite: string) {
		const index = this.paths.findIndex(({ id }) => id === idFavorite);
		
		this.paths[index].favorite = false;
	}
	
	set initPath(result: PathItem[]) {
		this.paths = result;
	}
	
	set addPath(path: PathItem) {
		this.paths.push(path)
	}
	
	set removePath(idPath: string) {
		const index = this.paths.findIndex(({ id }) => id === idPath);
		
		this.paths.splice(index, 1);
	}
	
	get lenghtPath() {
		return this.items.length;
	}
	
	get activePath() {
		const index = this.paths.findIndex(({ id }) => id === this.activeId);
		
		return index !== -1 ? this.paths[index] : null;
	}
	
	get items () {
		return this.paths
			.filter(val => filterSearchPath(val,searchStore.search))
			.sort(sortFavoritePath);
	}
	
	pathIndex(index: number) {
		return this.items[index];
	}
	
	pathId(pathId: string) {
		return this.paths.find(({ id }) => id === pathId);
	}
	
	startLoad() {
		this.loading = true;
	}
	
	finishLoad() {
		this.loading = false;
	}
	
	async featchPaths() {
		this.startLoad();
		
		try {
			const result = await httpClient.get(pathsRoute);
			
			this.initPath = result.data;
		} catch (e) {
			console.log('featchPaths', e)
		} finally {
			this.finishLoad();
		}
	}
}

export default new Paths();
