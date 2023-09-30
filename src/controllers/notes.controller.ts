import { Request, Response } from 'express';
import notesService from '../services/notes.service';

export class NotesController {
  public async index(req: Request, res: Response) {
    const notes = await notesService.findAll();
    return res
      .status(200)
      .send({ ok: true, message: 'Api - Notes', data: notes });
  }
  public async create(req: Request, res: Response) {
    const { body } = req.body;

    const newNotes = await notesService.create(body);
  }
}
