import { PathsInterface } from "store/Paths";
import { PathInterface } from "store/Path";


const useContainer = (
	pathsStore: PathsInterface,
	pathStore: PathInterface,
	isFavorite: boolean
) => {
	
	const handlerFavorite = () => {
		isFavorite
			? pathStore.removeFavoritePath(pathsStore.activeId)
			: pathStore.addFavoritePath(pathsStore.activeId);
	}
	
	const handlerRemove = () => {
		pathStore.deletePath(pathsStore.activeId)
	}
	
	return {
		handlerFavorite,
		handlerRemove,
	}
}

export default useContainer;