import repository from '../database/prisma.database';
import User from '../model/user.model';
import bcrypt from 'bcrypt';

class UserService {
  public async findAll() {
    const data = await repository.user.findMany();
    return data;
  }
  public async create(data: any) {
    const veriEmail = await repository.user.findUnique({
      where: {
        email: data._email,
      },
    });

    if (veriEmail) {
      throw new Error('Email já esta sendo usado por outro usuário');
    }

    const newUser = new User(data._name, data._email, data._password);
    const saltRounds = 8;

    const hashedPassword = await bcrypt.hash(newUser._password, saltRounds);

    newUser._password = hashedPassword;

    const createdUser = await repository.user.create({
      data: newUser.toSave(),
    });

    return createdUser;
  }
}
export default new UserService();
