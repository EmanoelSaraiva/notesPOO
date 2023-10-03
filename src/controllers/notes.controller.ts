import { Request, Response } from 'express';
import notesService from '../services/notes.service';

export class NotesController {
  public async index(req: Request, res: Response) {
    const notes = await notesService.findAll();

    return res.status(notes.code).send(notes);
  }

  public async create(req: Request, res: Response) {
    try {
      const { title, contentNotes, userId } = req.body;

      if (!title || !contentNotes || !userId) {
        return res.status(400).send({
          ok: false,
          message: 'Dados incorretos',
        });
      }

      const result = await notesService.create({
        title,
        contentNotes,
        userId,
      });

      return res.status(201).send({
        ok: true,
        message: 'Nota criada com sucesso',
        data: result,
      });
    } catch (error: any) {
      res.status(500).send({
        ok: false,
        message: error.toString(),
      });
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const result = await notesService.delete(id);

      return res.status(result.code).send(result);
    } catch (error: any) {
      res.status(500).send({
        ok: false,
        message: error.toString(),
      });
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { title, contentNotes } = req.body;

      const result = await notesService.update({
        id,
        title,
        contentNotes,
      });

      return res.status(result.code).send(result);
    } catch (error: any) {
      res.status(500).send({
        ok: false,
        message: error.toString(),
      });
    }
  }
}
