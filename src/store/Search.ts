import { makeAutoObservable } from 'mobx';

export interface SearchInterface {
  search: string;
  changeSearch: (text: string) => void;
}

class Search implements SearchInterface {
  search = '';

  constructor() {
    makeAutoObservable(
      this,
      {},
      {
        autoBind: true,
      }
    );
  }

  changeSearch(text: string) {
    this.search = text;
  }
}

export default new Search();
