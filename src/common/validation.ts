// Libs importing
import * as Joi from 'joi';

export const validationConfig = Joi.object({
  DB_TYPE: Joi.string()
    .valid('postgresql', 'better-sqlite', 'mysql', 'mariadb', 'mongo', 'sqlite')
    .required(),
  DB_HOST: Joi.string().required(),
  DB_NAME: Joi.string().required(),
  DB_USER: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_PORT: Joi.number().required(),
  PORT: Joi.number().required(),
  API_END_POINT: Joi.string().required(),
});
