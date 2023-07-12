'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { loginUser, setUser } from '@/redux/features/user/userSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Home from '@/pages/Home';
import { UserCredential, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '@/lib/firebase.config';

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

interface LoginFormInputs {
  email: string;
  password: string;
}

export function LoginForm({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const {user, isLoading} = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const from = location?.state?.from?.pathname || '/';

  const onSubmit = (data: LoginFormInputs) => {
   dispatch(loginUser({email: data.email, password: data.password}))
  };

 useEffect(() => {
  if(user.email && !isLoading) {
    navigate(from, {replace: true})
  }
 }, [user.email, isLoading, navigate, from])

//  google login
const handleGoogleSubmit = () => {
  signInWithPopup(auth, provider)
    .then((result: UserCredential) => {
      const email = result.user?.email;
      dispatch(setUser(email || null));
      localStorage.setItem('email', email || '');
    })
    .catch((error) => {
      console.error('Google login error:', error);
    });
};

useEffect(() => {
  const email = localStorage.getItem('email');
  if (email) {
    dispatch(setUser(email));
  }
}, [dispatch]);



  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <p>{errors.email.message}</p>}
            <Input
              id="password"
              placeholder="your password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <Button>Login with email</Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      {user.email ? (
      <Home />
    ) : (
      <Button
        onClick={handleGoogleSubmit}
        variant="outline"
        type="button"
        className="flex items-center justify-between"
      >
        <p>Google</p>
        <FcGoogle />
      </Button>
    )}
    </div>
  );
}