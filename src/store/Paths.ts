import { makeAutoObservable, onBecomeObserved } from 'mobx';

import { Path, LoaderInterdface } from 'types';

interface PathsInterface extends LoaderInterdface {
	paths: Path[];
	addPath: Path;
	initPath: Path[];
	featchPaths: () => void;
	lenghtPath: number;
	pathItem: (val: number) => Path;
}

const data = [
	{ id: '1', title: 'title', fullDescription: 'fullDescription', shortDescription: 'shortDescription', length: 10 },
	{ id: '2', title: 'title', fullDescription: 'fullDescription', shortDescription: 'shortDescription', length: 10 },
] as Path[];

class Paths implements PathsInterface {
	paths = [] as Path[];
	loading = false;
	
	constructor() {
		makeAutoObservable(this, {}, {
			autoBind: true,
		});
		
		onBecomeObserved(this, 'paths', this.featchPaths);
	}
	
	set initPath(result: Path[]) {
		this.paths = result;
	}
	
	set addPath(path: Path) {
		this.paths.push(path)
	}
	
	get lenghtPath() {
		return this.paths.length;
	}
	
	pathItem(index: number) {
		return this.paths[index];
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
