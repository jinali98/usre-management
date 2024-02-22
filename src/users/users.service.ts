import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

type Role = 'INTERN' | 'ADMIN' | 'SENIOR' | 'JUNIOR';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'User 1',
      email: 'user1@example.com',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'User 2',
      email: 'user2@example.com',
      role: 'ADMIN',
    },
    {
      id: 3,
      name: 'User 3',
      email: 'user3@example.com',
      role: 'SENIOR',
    },
    {
      id: 4,
      name: 'User 4',
      email: 'user4@example.com',
      role: 'JUNIOR',
    },
    {
      id: 5,
      name: 'User 5',
      email: 'user5@example.com',
      role: 'INTERN',
    },
    {
      id: 6,
      name: 'User 6',
      email: 'user6@example.com',
      role: 'ADMIN',
    },
  ];

  findAllUsers(role?: Role) {
    if (role) {
      const usersList = this.users.filter((user) => user.role === role);

      if (!usersList.length)
        throw new NotFoundException(`Users with role ${role} not found`);

      return usersList;
    }

    return this.users;
  }

  findOneUser(id: number) {
    const user = this.users.find((user) => user.id === +id);

    if (!user) throw new NotFoundException(`User with id ${id} not found`);

    return user;
  }

  createUser(user: CreateUserDto) {
    const newUser = {
      id: this.users.length + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: number, userUpdate: UpdateUserDto) {
    const userIndex = this.users.findIndex((user) => user.id === +id);
    const updatedUser = {
      ...this.users[userIndex],
      ...userUpdate,
    };
    this.users[userIndex] = updatedUser;
    return updatedUser;
  }

  deleteUser(id: number) {
    const userIndex = this.users.findIndex((user) => user.id === +id);
    const deletedUser = this.users[userIndex];
    this.users = this.users.filter((user) => user.id !== +id);
    return deletedUser;
  }
}
