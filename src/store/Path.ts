import { makeAutoObservable, onBecomeObserved } from 'mobx';

import { PathItem, LoaderInterdface } from 'types';
import dialogStore from 'store/Dialog';
import pathsStore from 'store/Paths';

export interface PathInterface extends LoaderInterdface {
	createPath: (data: any) => void;
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
				}, 3000)
			}) as Path[];
			
			dialogStore.close();
			pathsStore.addPath = data;
		} catch (e) {
			console.log('createPath', e)
		} finally {
			this.finishLoad();
		}
	}
}

export default new Path();
