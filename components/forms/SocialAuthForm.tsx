"use client"

import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import ROUTES from '@/constants/routes'
import { toast } from 'sonner'
import { signIn } from 'next-auth/react'
const SocialAuthForm = () => {

    const buttonClass = "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5"

    const handleSignIn = async (provider: 'github' | 'google') => {
        try {
            await signIn(provider,{
                callbackUrl: ROUTES.HOME,
                // redirect: false
            })
        } catch (error) {
            console.error(error)
            toast.error(
               "Sign In Failed",{
                   description: "Something went wrong",
                   position: "top-center",
                   icon: "🚨",
               }
            )
        }
    }

  return (
    <div className='mt-10 flex flex-wrap gap-2.5'>
        <Button className={buttonClass} onClick={() => handleSignIn('github')}>
            <Image 
                src="/icons/github.svg" 
                alt="github logo" 
                width={20} 
                height={20} 
                className='invert-colors mr-2.5 object-contain'
            />
            <span>Log in with Github</span>
        </Button>
        <Button className={buttonClass} onClick={() => handleSignIn('google')}>
            <Image 
                src="/icons/google.svg" 
                alt="google logo" 
                width={20} 
                height={20} 
                className='invert-colors mr-2.5 object-contain'
            />  
            <span>Log in with Google</span>
        </Button>
        
    </div>
  )
}

export default SocialAuthForm