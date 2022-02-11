import { makeAutoObservable, onBecomeObserved } from 'mobx';

import { Path, LoaderInterdface } from 'types';
import searchStore from './Search';

export interface PathsInterface extends LoaderInterdface {
	activeId: string;
	paths: Path[];
	addPath: Path;
	initPath: Path[];
	featchPaths: () => void;
	lenghtPath: number;
	pathIndex: (index: number) => Path;
	pathId: (id: string) => Path | undefined;
	active: string;
}

const data = [
	{ id: '1', title: 'home', fullDescription: 'fullDescription', shortDescription: 'shortDescription', length: 10 },
	{ id: '2', title: 'schoole', fullDescription: 'fullDescription', shortDescription: 'shortDescription', length: 10 },
] as Path[];

class Paths implements PathsInterface {
	paths = [] as Path[];
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
	
	set initPath(result: Path[]) {
		this.paths = result;
	}
	
	set addPath(path: Path) {
		this.paths.push(path)
	}
	
	get lenghtPath() {
		return this.items.length;
	}
	
	get items () {
		return this.paths
			.filter(({ title }) =>
				title
				.toLocaleLowerCase()
				.includes(searchStore.search.toLocaleLowerCase())
			);
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
			const result = await new Promise((resolve, reject) => {
				setTimeout(() =>{
					resolve(data);
				}, 3000)
			}) as Path[];
			
			this.initPath = result;
		} catch (e) {
			console.log('featchPaths', e)
		} finally {
			this.finishLoad();
		}
	}
}

export default new Paths();
