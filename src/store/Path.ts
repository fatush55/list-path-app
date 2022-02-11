import { makeAutoObservable, onBecomeObserved } from 'mobx';

import { PathItem, LoaderInterdface } from 'types';
import dialogStore from 'store/Dialog';
import pathsStore from 'store/Paths';

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
	
	async createPath(data: PathItem) {
		this.startLoad();
		
		try {
			const result = await new Promise((resolve, reject) => {
				setTimeout(() =>{
					resolve([]);
				}, 1000)
			}) as Path[];
			
			dialogStore.close();
			pathsStore.addPath = data;
		} catch (e) {
			console.log('createPath', e)
		} finally {
			this.finishLoad();
		}
	}
	
	async deletePath(id: string) {
		this.startLoad();
		
		try {
			const result = await new Promise((resolve, reject) => {
				setTimeout(() =>{
					resolve([]);
				}, 1000)
			}) as Path[];
			
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
			const result = await new Promise((resolve, reject) => {
				setTimeout(() =>{
					resolve([]);
				}, 1000)
			}) as Path[];
			
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
			const result = await new Promise((resolve, reject) => {
				setTimeout(() =>{
					resolve([]);
				}, 1000)
			}) as Path[];
			
			pathsStore.removeFavirite = id;
		} catch (e) {
			console.log('createPath', e)
		} finally {
			this.finishLoad();
		}
	}
}

export default new Path();
