import { v4 as uuid } from 'uuid';

export default class Notes {
  private id: string;

  constructor(
    public title: string,
    public contentNotes: string,
    public userId: string,
  ) {
    this.id = uuid();
  }

  public toJson() {
    return {
      id: this.id,
      title: this.title,
      contentNotes: this.contentNotes,
      userId: this.userId,
    };
  }

  public toSave() {
    return {
      id: this.id,
      title: this.title,
      contentNotes: this.contentNotes,
      userId: this.userId,
    };
  }
}
