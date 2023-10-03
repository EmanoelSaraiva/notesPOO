import repository from '../database/prisma.database';
import { ResponseDto } from '../dto/response.dto';
import { CreatedUser } from '../dto/user.dto';
import User from '../model/user.model';
import bcrypt from 'bcrypt';

class UserService {
  public async findAll(): Promise<ResponseDto> {
    const data = await repository.user.findMany({
      include: {
        notes: true,
      },
    });
    return {
      code: 200,
      message: 'Users listed',
      data,
    };
  }

  public async create(data: CreatedUser) {
    const veriEmail = await repository.user.findFirst({
      where: {
        email: data.email,
      },
    });

    if (veriEmail) {
      throw new Error('Email já esta sendo usado por outro usuário');
    }

    const newUser = new User(data.name, data.email, data.password);
    const saltRounds = 8;

    const hashedPassword = await bcrypt.hash(newUser.password, saltRounds);

    newUser.password = hashedPassword;

    const createdUser = await repository.user.create({
      data: {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
      },
    });

    return createdUser;
  }
}
export default new UserService();
