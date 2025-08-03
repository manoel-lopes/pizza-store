import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const singInSchema = z.object({
  email: z.email(),
})

export type SingInFormData = z.infer<typeof singInSchema>

export function useSingInForm() {
  const form = useForm<SingInFormData>({
    resolver: zodResolver(singInSchema),
  })

  return form
}
