import express, { Request, Response } from 'express';
import userRouter from './routes/user.routes';
import repository from './database/prisma.database';
import userService from './services/user.service';

const app = express();
app.use(express.json());
app.use(userRouter);

app.listen(3333, () => {
  console.log('Api rodando na porta 3333');
});

app.get('/', (req: Request, res: Response) => {
  return res.status(200).send({ ok: true, message: 'API Notes', data: [] });
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
