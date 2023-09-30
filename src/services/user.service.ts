import repository from '../database/prisma.database';
import User from '../model/user.model';
import bcrypt from 'bcrypt';

class UserService {
  public async findAll() {
    const data = await repository.user.findMany();
    return data;
  }

  // public async create(data: any) {
  //   const newUser = new User(data._name, data._email, data._password);

  //   const createdUser = await repository.user.create({
  //     data: newUser.toSave(),
  //   });
  //   return createdUser;
  // }
  public async create(data: any) {
    const newUser = new User(data._name, data._email, data._password);
    const saltRounds = 8;

    // Gere o hash da senha
    const hashedPassword = await bcrypt.hash(newUser._password, saltRounds);

    // Atualize a senha do usuário com o hash gerado
    newUser._password = hashedPassword;

    // Crie o usuário no banco de dados
    const createdUser = await repository.user.create({
      data: newUser.toSave(),
    });

    return createdUser;
  }
}
export default new UserService();
