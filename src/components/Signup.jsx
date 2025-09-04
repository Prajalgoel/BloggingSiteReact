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
        <div className='flex items-center justify-center'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>

                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>

                <p className='mt-2 text-center text-base text-black/60'>
                    Already have an account?&nbsp;
                    
                    <Link 
                    to= "/login"
                    className=''
                    >
                        Sign In
                    </Link>
                </p>

                {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}

                <form onSubmit={handleSubmit(signUp)} >
                    <div className='space-y-5'>
                        <Input
                        label = "Full Name : "
                        placeholder = "Enter Your Full Name"
                        {...register("name", {
                            required : true,

                        })}
                        />

                        <Input 
                        type = "email"
                        label = "Email : "
                        placeholder = "Enter Your Email"
                        {...register("email",{
                            required : true,
                            validate : {matchPattern:
                                value => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email must be valid"
                            }  
                        })}
                        />

                        <Input
                        label = "Password : "
                        placeholder = "Enter Password"
                        type = "password"
                        {...register("password", {
                            required : true
                        })}
                        />

                        <Button
                        children= "Create Account"
                        type='submit'
                        className='w-full'
                        />
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Signup