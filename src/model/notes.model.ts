import { v4 as uuid } from 'uuid';

export default class Notes {
  private _id: string;

  constructor(
    public _title: string,
    public _contentNotes: string,
    private _idUser: string,
  ) {
    this._id = uuid();
  }

  public getContentNotes() {
    return this._contentNotes;
  }

  public getTitle() {
    return this._title;
  }

  public getidUser() {
    return this._idUser;
  }

  public toJson() {
    return {
      title: this._title,
      contentNotes: this._contentNotes,
      idUser: this._idUser,
    };
  }

  public toSave() {
    return {
      id: this._id,
      title: this._title,
      contentNote: this._contentNotes,
      idUser: this._idUser,
    };
  }
}
