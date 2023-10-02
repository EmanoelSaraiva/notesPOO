import express, { Request, Response } from 'express';
import userRouter from './routes/user.routes';
import userService from './services/user.service';
import repository from './database/prisma.database';
import notesService from './services/notes.service';

const app = express();
app.use(express.json());
app.use(userRouter);

app.listen(3333, () => {
  console.log('Api rodando na porta 3333');
});

app.get('/', async (req: Request, res: Response) => {
  const dataUser = await repository.user.findMany({
    include: {
      notes: true,
    },
  });

  return res
    .status(200)
    .send({ ok: true, message: 'API Notes', data: dataUser });
});

app.post('/users', async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const createdUser = await userService.create({
      _name: name,
      _email: email,
      _password: password,
    });
    res.json(createdUser);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

app.post('/notes', async (req: Request, res: Response) => {
  const { contentNotes, title, userId } = req.body;

  try {
    const createdNotes = await notesService.create({
      _contentNotes: contentNotes,
      _title: title,
      _idUser: userId,
    });
    res.json(createdNotes);
  } catch (error) {
    console.error('Erro ao criar uma nota:', error);
    res.status(500).json({ error: 'Erro ao criar nota' });
  }
});

app.delete('/notes/:id', async (req: Request, res: Response) => {
  const noteId = req.params.id;
  const userId = req.params.userId;

  try {
    const idNote = await notesService.delete(noteId);
    if (idNote) {
      res.status(200).json({ message: 'Nota excluida com sucesso' });
    } else {
      res.status(404).json({ message: 'Nota não encontrada' });
    }
  } catch (error) {
    console.error('Erro ao encontrar nota:', error);
    res.status(500).json({ error: 'Erro ao deletar nota' });
  }
});
