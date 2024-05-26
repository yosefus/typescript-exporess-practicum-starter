import bcrypt from 'bcrypt';

export const hashPassword = (password: string) => {
  const saltRounds = 10;
  const hashedPassword = bcrypt.hashSync(password, saltRounds);
  return hashedPassword;
};

export const comparePassword = (password: string, hashedPassword: string) => {
  const result = bcrypt.compareSync(password, hashedPassword);
  return result;
};
