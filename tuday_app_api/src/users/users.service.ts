import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CrearUserDTO } from './Dto/create-user.dto';
import { updateUserDTO } from './Dto/update-user.dto';
import { loginUserDto } from './Dto/login-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

  CrearUser(user: CrearUserDTO) {
    const NewUser = this.userRepository.create(user)
    return this.userRepository.save(NewUser)
  }

  getUsers() {
    return this.userRepository.find()
  }

  getUser(id: number) {
    return this.userRepository.findOne({
      where: {
        id
      }
    })
  }

  deleteUser(id: number) {
    return this.userRepository.delete({ id })
  }

  updateUser(id: number, user: updateUserDTO) {
    return this.userRepository.update({ id }, user)
  }

  loginUser(user: loginUserDto) {
    return this.userRepository.findOne({
      where: {
        Usuario: user.Usuario,
        Password: user.Password
      }
    })
  }

}



