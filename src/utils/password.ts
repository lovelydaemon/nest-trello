import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;

export async function genHash(password: string) {
  return await bcrypt.hash(password, saltOrRounds);
}

export async function checkHash(pasword: string, hash: string) {
  return await bcrypt.compare(pasword, hash);
}
