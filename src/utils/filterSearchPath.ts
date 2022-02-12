import { PathItem } from 'types';

export default ({ title, fullDescription, }: PathItem, search: string) => {
	const isFindTitle  = title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
	const isFindFullDescription = fullDescription.toLocaleLowerCase().includes(search.toLocaleLowerCase());
	
	return isFindTitle || isFindFullDescription;
}
