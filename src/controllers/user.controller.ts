import { Request, Response } from 'express';
import userService from '../services/user.service';

export class UserController {
  public async index(req: Request, res: Response) {
    const result = await userService.findAll();

    return res.status(result.code).send(result);
  }

  public async create(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        return res.status(400).send({
          ok: false,
          message: 'Dados incorretos',
        });
      }

      const result = await userService.create({
        name,
        email,
        password,
      });

      return res.status(201).send({
        ok: true,
        message: 'Usuario cadastrado com sucesso',
        data: result,
      });
    } catch (error: any) {
      res.status(500).send({
        ok: false,
        message: error.toString(),
      });
    }
  }
}
