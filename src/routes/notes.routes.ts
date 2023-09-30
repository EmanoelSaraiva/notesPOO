import { Router } from 'express';
import { NotesController } from '../controllers/notes.controller';

const routerNotes = Router();
const controllerNotes = new NotesController();

routerNotes.get('/notes', controllerNotes.index);

export default routerNotes;
