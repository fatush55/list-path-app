import { makeAutoObservable, onBecomeObserved } from 'mobx';

import { PathItem, LoaderInterdface } from 'types';
import dialogStore from 'store/Dialog';
import pathsStore from 'store/Paths';
import httpClient from 'lib/httpClient';
import { pathRoute } from 'lib/apiRouter';

export interface PathInterface extends LoaderInterdface {
	createPath: (data: any) => void;
	deletePath: (id: string) => void;
	addFavoritePath: (id: string) => void;
	removeFavoritePath: (id: string) => void;
}

class Path implements PathInterface {
	loading = false;
	
	constructor() {
		makeAutoObservable(this, {}, {
			autoBind: true,
		});
	}
	
	startLoad() {
		this.loading = true;
	}
	
	finishLoad() {
		this.loading = false;
	}
	
	async createPath(path: Omit<PathItem, 'id'>) {
		this.startLoad();
		
		try {
			const result = await httpClient.post(pathRoute(), path);
			
			dialogStore.close();
			pathsStore.addPath = { id: result.data, ...path };
		} catch (e) {
			console.log('createPath', e)
		} finally {
			this.finishLoad();
		}
	}
	
	async deletePath(id: string) {
		this.startLoad();
		
		try {
			const result = await httpClient.delete(pathRoute(id));
			
			pathsStore.active = '';
			pathsStore.removePath = id;
		} catch (e) {
			console.log('createPath', e)
		} finally {
			this.finishLoad();
		}
	}
	
	async addFavoritePath(id: string) {
		this.startLoad();
		
		try {
			const result = await httpClient.put(pathRoute(id), { favorite: true });
			
			pathsStore.addFavirite = id;
		} catch (e) {
			console.log('createPath', e)
		} finally {
			this.finishLoad();
		}
	}
	
	async removeFavoritePath(id: string) {
		this.startLoad();
		
		try {
			const result = await httpClient.put(pathRoute(id), { favorite: false });
			
			pathsStore.removeFavirite = id;
		} catch (e) {
			console.log('createPath', e)
		} finally {
			this.finishLoad();
		}
	}
}

export default new Path();
