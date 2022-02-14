import { makeAutoObservable } from 'mobx';

export interface DialogInterface {
  openDialogId: string | null;
  close: () => void;
}

class Dialog implements DialogInterface {
  openDialogId = null as string | null;

  constructor() {
    makeAutoObservable(
      this,
      {},
      {
        autoBind: true,
      }
    );
  }

  set open(id: string) {
    this.openDialogId = id;
  }

  close() {
    this.openDialogId = null;
  }
}

export default new Dialog();
