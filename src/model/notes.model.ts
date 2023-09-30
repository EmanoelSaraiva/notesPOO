import { v4 as uuid } from 'uuid';

export default class Notes {
  private _id: string;

  constructor(
    public _contentNote: string,
    public _title: string,
    private _idUser: string,
  ) {
    this._id = uuid();
  }

  public getContentNote() {
    return this._contentNote;
  }

  public getTitle() {
    return this._title;
  }

  public getidUser() {
    return this._idUser;
  }

  public toJson() {
    return {
      contentNote: this._contentNote,
      idUser: this._idUser,
      title: this._title,
    };
  }

  public toSave() {
    return {
      id: this._id,
      contentNote: this._contentNote,
      idUser: this._idUser,
      title: this._title,
    };
  }
}
