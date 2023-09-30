import { v4 as uuid } from 'uuid';
import Notes from './notes.model';

export default class User {
  private _id: string;
  public _notes!: Notes[];

  constructor(
    public _name: string,
    public _email: string,
    private _password: string,
  ) {
    this._id = uuid();
  }

  public getId() {
    return this._id;
  }

  public getNotes() {
    return this._notes;
  }

  public getEmail() {
    return this._email;
  }

  public getPassword() {
    return this._password;
  }

  public getJson() {
    return { id: this._id, name: this._name, email: this._email };
  }

  public toSave() {
    return {
      id: this._id,
      name: this._name,
      email: this._email,
      password: this._password,
    };
  }
}
