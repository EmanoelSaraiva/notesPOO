import { Router } from 'express';
import { NotesController } from '../controllers/notes.controller';

export const notesRoutes = () => {
  const router = Router();

  router.get('/', new NotesController().index);
  router.post('/', new NotesController().create);
  router.delete('/:id', new NotesController().delete);
  router.put('/:id', new NotesController().update);

  return router;
};
