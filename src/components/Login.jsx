import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import service from '../appwrite/config'
import authService from '../appwrite/auth'
import {login as authLogin} from '../store/authSlice'
import {Input, Button, Logo} from './'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // handleSubmit is a event when form submitted and it will take function to execute
    // register takes all values of inputs and gives as object to data in login function 
    const {register, handleSubmit} =useForm()
    const [error, seterror] = useState("")

  // data is a object passed through register values
    const login = async (data) => {
        seterror("")
        try {
            const session = await authService.login(data)
            if (session) {
              const userData = await authService.getCurrentUser()
              if (userData) {
                dispatch(authLogin(userData))
                navigate("/")
              }
            }
        } catch (error) {
            seterror(error.message)
        }
    }

  return (
    <div className='flex items-center justify-center w-full py-12'>
      <div className={`mx-auto w-full max-w-lg bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl`}>
        <div className="mb-6 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
          <p className="text-gray-600">
                      Don&apos;t have an account?&nbsp;
                      <Link
                          to="/signup"
                          className="font-semibold text-indigo-600 hover:text-indigo-700 transition-colors duration-200"
                      >
                          Sign Up
                      </Link>
          </p>
        </div>

        {
          error && (
            <div className='bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-center'>
              {error}
            </div>
          )
        }

        <form 
        className='space-y-6'
        onSubmit={handleSubmit(login)}>
            <Input 
            label = "Email Address" 
            placeholder = "Enter your email"
            type = "email"
            {...register("email", 
              {
              required : true,
              validate : {
                matchPattern : (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email must be valid"
              }
            })}
            />

            <Input 
            label = "Password"
            placeholder = "Enter your password"
            type = "password"
            {...register("password", {
              required : true,
            })}
            />

            <Button 
            type='submit'
            children = "Sign In" 
            className='w-full text-lg font-semibold'/>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default Login