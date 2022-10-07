
import { hash, compare } from "bcryptjs";

const SALT = parseInt(process.env.SALT) || 10

export const hashPassword = async (password: string) =>  await hash(password, SALT)

export const verifyPassword = async(password: string, hashed: string) => await compare(password, hashed);