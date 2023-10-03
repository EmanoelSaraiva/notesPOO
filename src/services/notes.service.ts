import repository from '../database/prisma.database';
import { CreatedNotes, UpdateNotesDto } from '../dto/notes.dto';
import { ResponseDto } from '../dto/response.dto';
import Notes from '../model/notes.model';

class NotesService {
  public async findAll(): Promise<ResponseDto> {
    const data = await repository.notes.findMany();

    return {
      code: 200,
      message: 'Notes listed',
      data,
    };
  }

  public async create(data: CreatedNotes): Promise<ResponseDto> {
    const newNote = new Notes(data.title, data.contentNotes, data.userId);

    const createdNotes = await repository.notes.create({
      data: {
        title: newNote.title,
        contentNotes: newNote.contentNotes,
        userId: newNote.userId,
      },
    });

    return {
      code: 200,
      message: 'Nota Criada',
      data: createdNotes,
    };
  }

  public async delete(id: string): Promise<ResponseDto> {
    const deleteNote = await repository.notes.findUnique({
      where: { id: id },
    });

    if (!deleteNote) {
      return {
        code: 404,
        message: 'Note not found',
      };
    }

    await repository.notes.delete({
      where: {
        id,
      },
    });

    return {
      code: 200,
      message: 'Nota deletada',
    };
  }

  public async update(data: UpdateNotesDto): Promise<ResponseDto> {
    const note = await repository.notes.findUnique({
      where: {
        id: data.id,
      },
    });

    if (!note) {
      return {
        code: 404,
        message: 'Note not found',
      };
    }

    const updatedNote = await repository.notes.update({
      where: {
        id: data.id,
      },
      data: {
        title: data.title,
        contentNotes: data.contentNotes,
      },
    });

    return {
      code: 200,
      message: 'Note successfully updated',
      data: updatedNote,
    };
  }
}
export default new NotesService();
