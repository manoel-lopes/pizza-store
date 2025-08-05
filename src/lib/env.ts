import { z } from 'zod'

type EnvParseErrorMap = { _errors: string[] }
type EnvErrorDetails = EnvParseErrorMap | string[]
type EnvParseError = [string, EnvErrorDetails]

const _env = z
  .object({
    NODE_ENV: z.enum(['development', 'production', 'test']),
    API_URL: z.url().optional(),
  })
  .safeParse(import.meta.env)

if (!_env.success) {
  const errors: EnvParseError[] = Object.entries(_env.error.format())
  const formattedErrors = formatErrors(errors)
  logEnvErrors(formattedErrors)
  process.exit(1)
}

function formatErrors(errors: EnvParseError[]) {
  return errors.filter(([_, value]) => '_errors' in value).map(([key]) => `${key} is required`)
}

function logEnvErrors(errors: string[]): void {
  console.error('\n\x1b[1m\x1b[31m❌ Invalid environment variables:\x1b[0m')
  errors.forEach((error) => console.error(`- ${error}`))
}

export const env = _env.data
