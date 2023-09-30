import repository from '../database/prisma.database';
import User from '../model/user.model';

class UserService {
  public async findAll() {
    const data = await repository.user.findMany();
    return data;
  }

  public async create(data: any) {
    const newUser = new User(data._name, data._email, data._password);

    console.log(data);

    const createdUser = await repository.user.create({
      data: newUser.toSave(),
    });
    return createdUser;
  }
}
export default new UserService();
