import { AppEnv } from '../constants/app.constant';

export const jwtConfig = {
  secret: AppEnv.JWT_SECRET,
  signOptions: { expiresIn: AppEnv.JWT_EXPIRY_IN_SECOND },
};
