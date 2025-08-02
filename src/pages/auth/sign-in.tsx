import { Helmet } from 'react-helmet-async'

import { SignInForm } from './sign-in-form'

export function SignIn() {
  return (
    <>
      <Helmet title='signin' />
      <div className='p-8'>
        <div className='w-[350px] flex flex-col justify-center gap-6'>
          <div className='flex flex-col gap-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>Sign in to your account</h1>
            <p className='text-sm text-muted-foreground'>
              Enter your email below to sign in to your account
            </p>
          </div>
          <SignInForm />
        </div>
      </div>
    </>
  )
}
