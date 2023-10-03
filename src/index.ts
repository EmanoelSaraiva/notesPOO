import express from 'express';
import { userRoutes } from './routes/user.routes';
import cors from 'cors';
import { notesRoutes } from './routes/notes.routes';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/user', userRoutes());
app.use('/note', notesRoutes());

app.listen(3333, () => {
  console.log('Api rodando na porta 3333');
});
