import { Request, Response } from 'express';
import userService from '../services/user.service';

export class UserController {
  public async index(req: Request, res: Response) {
    const user = await userService.findAll();
    return res
      .status(200)
      .send({ ok: true, message: 'Api - User', data: user });
  }
  public async create(req: Request, res: Response) {
    const { body } = req.body;

    const newUser = await userService.create(body);
  }
}
