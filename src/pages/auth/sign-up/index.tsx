import { Helmet } from 'react-helmet-async'

import { NavLink } from '@/components/router/nav-link'
import { Button } from '@/components/ui/button'
import { SignUpForm } from './components/sign-up-form'

export function SignUp() {
  return (
    <>
      <Helmet title='signup' />
      <Button
        asChild
        variant='ghost'
        className='absolute top-8 right-8'
      >
        <NavLink to='/sign-in'>Sign in</NavLink>
      </Button>
      <div className='p-8'>
        <div className='w-[350px] flex flex-col justify-center gap-6'>
          <div className='flex flex-col gap-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>Create an account</h1>
            <p className='text-sm text-muted-foreground'>
              Become a partner and start selling your pizzas
            </p>
          </div>
          <div className='flex flex-col gap-2'>
            <SignUpForm />
            <p className='px-6 text-center text-sm leading-relaxed text-muted-foreground'>
              By clicking continue, you agree to our{' '}
              <a className='underline underline-offset-4 text-nowrap'>
                Terms of Service
              </a>{' '}
              and acknowledge that you have read our{' '}
              <a className='underline underline-offset-4 text-nowrap'>
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
