import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import authService from '../appwrite/auth'
import { login } from '../store/authSlice'
import { Link } from 'react-router-dom'
import Input from './Input'
import Button from './Button'
import Logo from './logo/Logo'

function Signup() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const [error, seterror] = useState("")

    const signUp = async (data) => {
        seterror("")
        try {
            const userAccount = await authService.createAccount(data)
            if (userAccount) {
                const userData = await authService.getCurrentUser()
                if (userData) {
                    dispatch(login(userData))
                    navigate("/")
                }
            }
        } catch (error) {
            seterror(error.message)
        }
    }

    return (
        <div className='flex items-center justify-center py-12'>
            <div className={`mx-auto w-full max-w-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl p-8 border border-white/30 dark:border-gray-700/50 shadow-2xl transition-colors duration-300`}>
                <div className="mb-6 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>

                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Create Account</h2>
                    <p className='text-gray-600 dark:text-gray-300'>
                        Already have an account?&nbsp;
                        <Link 
                        to= "/login"
                        className='font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-200'
                        >
                            Sign In
                        </Link>
                    </p>
                </div>

                {error && (
                    <div className='bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg mb-6 text-center'>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit(signUp)} className='space-y-6'>
                        <Input
                        label = "Full Name"
                        placeholder = "Enter your full name"
                        {...register("name", {
                            required : true,

                        })}
                        />

                        <Input 
                        type = "email"
                        label = "Email Address"
                        placeholder = "Enter your email"
                        {...register("email",{
                            required : true,
                            validate : {matchPattern:
                                value => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email must be valid"
                            }  
                        })}
                        />

                        <Input
                        label = "Password"
                        placeholder = "Create a strong password"
                        type = "password"
                        {...register("password", {
                            required : true
                        })}
                        />

                        <Button
                        children= "Create Account"
                        type='submit'
                        className='w-full text-lg font-semibold'
                        />
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        By creating an account, you agree to our Terms of Service and Privacy Policy
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signup