import bcrypt from 'bcrypt';

const hashRounds = 10;

export const generateHash = (password) => bcrypt.hash(password, bcrypt.genSaltSync(hashRounds));

export const compareHash = async (password, hash) => await bcrypt.compareSync(password, hash);
