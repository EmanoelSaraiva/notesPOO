import { Router } from 'express';
import { NotesController } from '../controllers/notes.controller';

const router = Router();
const controllerNotes = new NotesController();

router.get('/notes', controllerNotes.index);

export default router;
