import { z } from "zod";
import { ERROR_SCHEMA_FIELDS } from './../../constants/error-schema.constants';

export type SignUpFormType = z.infer<typeof SignUpFormSchema>;

export const SignUpFormSchema = z.object(
    {
        name: z.string({ required_error: ERROR_SCHEMA_FIELDS.required })
            .nonempty(ERROR_SCHEMA_FIELDS.required)
            .transform((x: string) => {
                return x.toLowerCase().trim()
            }),
        lastName: z.string({ required_error: ERROR_SCHEMA_FIELDS.required })
            .nonempty(ERROR_SCHEMA_FIELDS.required)
            .transform((x: string) => {
                return x.toLowerCase().trim()
            }),
        email: z.string({ required_error: ERROR_SCHEMA_FIELDS.required })
            .nonempty(ERROR_SCHEMA_FIELDS.required)
            .email(ERROR_SCHEMA_FIELDS.invalidEmail)
            .transform((x: string) => {
                return x.toLowerCase().trim()
            }),
        emailConfirm: z.string({ required_error: ERROR_SCHEMA_FIELDS.required })
            .nonempty(ERROR_SCHEMA_FIELDS.required)
            .transform((x: string) => {
                return x.toLowerCase().trim()
            }).refine(async (arg: string) => {
                // Validar email duplicado
                return true;
            }),
        password: z.string({ required_error: ERROR_SCHEMA_FIELDS.required })
            .nonempty(ERROR_SCHEMA_FIELDS.required)
            .min(1, ERROR_SCHEMA_FIELDS.required)
            .min(6, ERROR_SCHEMA_FIELDS.minLength)
            .transform((x: string) => {
                return x.toLowerCase().trim()
            }),
        passwordConfirm: z.string({ required_error: ERROR_SCHEMA_FIELDS.required })
            .nonempty(ERROR_SCHEMA_FIELDS.required)
            .transform((x: string) => {
                return x.toLowerCase().trim()
            }),
        phone: z.string({ required_error: ERROR_SCHEMA_FIELDS.required })
            .nonempty(ERROR_SCHEMA_FIELDS.required)
            .transform((x: string) => {
                return x.toLowerCase().trim()
            }),
        terms: z.literal(true, {
            errorMap: (x: z.ZodIssueOptionalMessage) => ({
                message: ERROR_SCHEMA_FIELDS.termsRequired
            })
        }),
    }
).superRefine((data, ctx: z.RefinementCtx) => {
    if (data.email !== data.emailConfirm) {
        ctx.addIssue({
            code: "custom",
            message: ERROR_SCHEMA_FIELDS.confirmEmail,
            path: ['emailConfirm']
        })
    }

    if (data.password !== data.passwordConfirm) {
        ctx.addIssue({
            code: 'custom',
            message: ERROR_SCHEMA_FIELDS.confirmPass,
            path: ['passwordConfirm']
        })
    }
});