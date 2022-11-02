import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto as CreateDto } from './dto/create-user.dto';
import { UpdateUserDto as UpdateDto } from './dto/update-user.dto';
import { LoginUserDto as LoginDto } from './dto/login-user.dto';
import { compareHash, hashData } from './util';
import { QueryDto } from 'src/shared/dto/query.dto';

const select = {
  id: true,
  email: true,
  name: true,
  role: true,
};


@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async validateHash(password: string, hashed: string) {
    const isEqual = await compareHash(password, hashed);
    if (!isEqual)
      throw new HttpException("invalid credentials",
        HttpStatus.UNAUTHORIZED);
  }

  async create(createDto: CreateDto) {
    createDto.password = await hashData(createDto.password)
    return this.prisma.user.create({ data: createDto, select });
  }


  findOne(id: number, refreshToken:boolean) {
    return this.prisma.user.findUniqueOrThrow({
      where: { id },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        refreshToken,
      }
    })
  }

  async findOneByEmail(email: string) {
    try {
      const data = await this.prisma.user.findUniqueOrThrow({
        where: { email },
      })
      return data
    } catch (e) {
      throw new HttpException("invalid credentials",
        HttpStatus.UNAUTHORIZED);
    }
  }

  findAll({ skip, contains, take, sortOrder, orderBy }: QueryDto) {
    return this.prisma.user.findMany({
      skip,
      take,
      where: {
        name: { contains },
        email: { contains },
      },
      orderBy: {
        [orderBy]: sortOrder,
      },
    });
  }



  async updateWithoutPassword(id: number, updateDto: UpdateDto) {
    if (updateDto.password)
      updateDto.password = await hashData(updateDto.password);
    return this.prisma.user.update({
      where: { id },
      data: updateDto,
    });
  }

  async login({ email, password }: LoginDto) {
    const { password: hashed, ...data } = await this.findOneByEmail(email);
    await this.validateHash(password, hashed);
    return data;
  }

  async updateRefreshToken(id: number, refreshToken: string) {
    return this.prisma.user.update({
      where: { id },
      data: {
        refreshToken: refreshToken && await hashData(refreshToken),
      }
    })
  }

  async update(id: number, { newPassword, password, ...val }: UpdateDto) {
    const { password: hashed } = await this.prisma.user.findUniqueOrThrow({
      where: { id }
    });
    await this.validateHash(password, hashed);

    return this.prisma.user.update({
      where: { id },
      data: {
        ...val,
        password: newPassword && await hashData(newPassword)
      },
      select
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: { id }, select
    });
  }
}
