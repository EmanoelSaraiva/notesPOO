import repository from '../database/prisma.database';
import Notes from '../model/notes.model';

class NotesService {
  public async findAll() {
    const data = await repository.notes.findMany();

    return data;
  }

  public async create(data: any) {
    const newNote = new Notes(data._title, data._contentNotes, data._idUser);

    const createdNotes = await repository.notes.create({
      data: {
        title: data._title,
        contentNotes: data._contentNotes,
        userId: data._idUser,
      },
    });

    return createdNotes;
  }
}
export default new NotesService();
