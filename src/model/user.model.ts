import { v4 as uuid } from 'uuid';
import Notes from './notes.model';

export default class User {
  private id: string;
  public notes!: Notes[];

  constructor(
    public name: string,
    public email: string,
    public password: string,
  ) {
    this.id = uuid();
  }

  public getId() {
    return this.id;
  }

  public getNotes() {
    return this.notes;
  }

  public getEmail() {
    return this.email;
  }

  public getPassword() {
    return this.password;
  }

  public getJson() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      notes: this.notes,
    };
  }

  public toSave() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
    };
  }
}
