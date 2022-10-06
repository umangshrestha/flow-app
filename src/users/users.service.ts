import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { hash, compare } from "bcryptjs";
import { LoginUserDto } from './dto/login-user.dto';


const SALT = parseInt(process.env.SALT) || 10



const hashPassword = async (password: string) =>  await hash(password, SALT)

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

  findOne(email: string) {
    return this.prisma.user.findUniqueOrThrow({
      where: {
        email: email
      },
    })
  }


  async login({ email, password }: LoginUserDto) {
    try {
      const { password: hashed, ...data } = await this.findOne(email);
      const isEqual = await compare(password, hashed);
      if (isEqual)
        return data;
    } catch (_) {
      throw new HttpException("invalid_credentials",
        HttpStatus.UNAUTHORIZED);
    }
  }

  async update(email: string, { newPassword, oldPassword }: UpdateUserDto) {
    const { password: hashed } = await this.findOne(email);
    const isEqual = await compare(oldPassword, hashed);
    if (!isEqual)
      throw new HttpException("invalid_credentials",
        HttpStatus.UNAUTHORIZED);

    return this.prisma.user.update({
      where: { email },
      data: { password: await hashPassword(newPassword) }
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({where:{id}});
  }
}
