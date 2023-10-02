import { v4 as uuid } from 'uuid';

export default class Notes {
  private _id: string;

  constructor(
    public _title: string,
    public _contentNotes: string,
    public _idUser: string,
  ) {
    this._id = uuid();
  }

  public toJson() {
    return {
      id: this._id,
      title: this._title,
      contentNotes: this._contentNotes,
      idUser: this._idUser,
    };
  }

  public toSave() {
    return {
      id: this._id,
      title: this._title,
      contentNotes: this._contentNotes,
      userId: this._idUser,
    };
  }
}
