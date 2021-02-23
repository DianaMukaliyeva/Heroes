import * as jwt from 'jsonwebtoken';
import { Hero } from '../entities/hero';

const JWT_SIGNING_SECRET =
  'this_secret_should_come_from_hidden_env_files_and_never_committed_to_repo';

const generateJwtForUserId = (userId: string) => jwt.sign({ userId }, JWT_SIGNING_SECRET);

interface decodedObject {
  userId?: string;
}

const verifyUser = async (token: string, connection) =>
  jwt.verify(token, JWT_SIGNING_SECRET, async (err, decoded) => {
    if (err) {
      return undefined;
    }
    const hero: decodedObject = decoded;
    if (hero.userId) {
      const userId: number = +hero.userId;
      const heroRepository = connection.getRepository(Hero);
      const heroHimself: Hero = await heroRepository.findOne({ id: userId });
      return heroHimself;
    }
    return undefined;
  });

export const AuthService = () => ({
  generateJwtForUserId,
  verifyUser,
});
