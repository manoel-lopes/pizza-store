import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useSingInForm } from '@/hooks/presentation/useSingInForm'

export function SignInForm() {
  const { register } = useSingInForm()

  return (
    <form className='space-y-4'>
      <div className='space-y-2'>
        <Label htmlFor='email'>Email</Label>
        <Input
          type='email'
          placeholder='Enter your email'
          {...register('email')}
        />
      </div>
      <Button className='w-full' type='submit'>
        Sign in
      </Button>
    </form>
  )
}
