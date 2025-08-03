import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { type SingInFormData, useSingInForm } from '@/hooks/presentation/forms/useSingInForm'
import { useToast } from '@/hooks/presentation/useToast'

export function SignInForm() {
  const { register, handleSubmit, formState: { isSubmitting } } = useSingInForm()
  const toast = useToast()

  function handleSingIn(data: SingInFormData) {
    try {
      toast.success('We send an authentication link to your email.')
    } catch (error) {
      toast.error('Failed to send authentication link.')
      console.error(error)
    }
  }

  return (
    <form
      className='space-y-4'
      onSubmit={handleSubmit(handleSingIn)}
    >
      <div className='space-y-2'>
        <Label htmlFor='email'>Email</Label>
        <Input
          type='email'
          placeholder='Enter your email'
          {...register('email')}
        />
      </div>
      <Button
        className='w-full'
        type='submit'
        disabled={isSubmitting}
      >
        Access dashboard
      </Button>
    </form>
  )
}
