import { AuthChecker } from 'type-graphql';

import { Hero } from '../entities/hero';

export const customAuthChecker: AuthChecker<Hero> = ({ context: hero }, roles) => {
  if (roles.length === 0) {
    return hero !== undefined;
  }

  if (!hero) {
    return false;
  }

  if (roles.includes(hero.role)) {
    return true;
  }

  return false;
};
