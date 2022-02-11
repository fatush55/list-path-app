import { PathItem } from "types";

export default ({ title }: PathItem, search: string) =>
	title
		.toLocaleLowerCase()
		.includes(search.toLocaleLowerCase())