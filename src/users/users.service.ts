import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { hashPassword, verifyPassword } from '../utils/password-validator';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await hashPassword(createUserDto.password)
    return this.prisma.user.create({ data: createUserDto });
  }

  findAll() {
    return this.prisma.user.findMany({
      select: {
        email: true,
        firstName: true,
        lastName: true
      }
    }
    );
  }

  findOne(id: number) {
    return this.prisma.user.findUniqueOrThrow({
      where: { id }
    })
  }

  findOneByEmail(email: string) {
    return this.prisma.user.findUniqueOrThrow({
      where: { email },
    })
  }


  async login({ email, password }: LoginUserDto) {
    try {
      const { password: hashed, ...data } = await this.findOneByEmail(email);
      const isEqual = await verifyPassword(password, hashed);
      if (isEqual)
        return data;
    } catch (_) {
      throw new HttpException("invalid_credentials",
        HttpStatus.UNAUTHORIZED);
    }
  }

  async update(id: number, { newPassword, oldPassword }: UpdateUserDto) {
    const { password: hashed } = await this.findOne(id);
    const isEqual = await verifyPassword(oldPassword, hashed);
    if (!isEqual)
      throw new HttpException("invalid_credentials",
        HttpStatus.UNAUTHORIZED);

    return this.prisma.user.update({
      where: { id },
      data: { password: await hashPassword(newPassword) }
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
