import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { type SignUpFormData, useSignUpForm } from '@/hooks/presentation/forms/useSignUpForm'
import { useToast } from '@/hooks/presentation/useToast'
import { maskPhoneNumber } from '@/util/mask/phone'

export function SignUpForm() {
  const { register, handleSubmit, formState: { isSubmitting }, watch } = useSignUpForm()
  const toast = useToast()
  const navigate = useNavigate()

  function handleSignUp(data: SignUpFormData) {
    try {
      toast.success('Account created successfully.', {
        action: {
          label: 'Sign in',
          onClick: () => navigate('/sign-in'),
        },
      })
    } catch (error) {
      toast.error('Failed to create account.')
      console.error(error)
    }
  }

  return (
    <form
      className='space-y-4'
      onSubmit={handleSubmit(handleSignUp)}
    >
      <div className='space-y-2'>
        <Input
          type='email'
          placeholder='Enter your email'
          {...register('email')}
        />
      </div>

      <div className='space-y-2'>
        <Input
          type='text'
          placeholder='Enter the restaurant name'
          {...register('restaurantName')}
        />
      </div>
      <div className='space-y-2'>
        <Input
          type='text'
          placeholder='Enter the manager name'
          {...register('managerName')}
        />
      </div>
      <div className='space-y-2'>
        <Input
          type='text'
          placeholder='Enter the manager phone number'
          value={maskPhoneNumber(watch('phone'))}
          {...register('phone')}
        />
      </div>

      <Button
        className='w-full'
        type='submit'
        disabled={isSubmitting}
      >
        Create account
      </Button>
    </form>
  )
}
