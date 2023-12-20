import { z } from 'zod';
import { ERROR_SCHEMA_FIELDS } from '../../constants/error-schema.constants';

export const LoginFormSchema = z.object({
  email: z
    .string({
      required_error: ERROR_SCHEMA_FIELDS.required,
    })
    .nonempty(ERROR_SCHEMA_FIELDS.required)
    .email(ERROR_SCHEMA_FIELDS.invalidEmail)
    .transform((x: string) => {
      return x.toLowerCase();
    }),
  password: z
    .string({
      required_error: ERROR_SCHEMA_FIELDS.required,
    })
    .min(1, ERROR_SCHEMA_FIELDS.required)
    .min(6, ERROR_SCHEMA_FIELDS.minLength),
});

export type LoginFormType = z.infer<typeof LoginFormSchema>;
