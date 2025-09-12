import { useState, useEffect } from 'react' 
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from './components'

function App() {
  const [loading, setloading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
        if (userData) {
          dispatch(login(userData))
        }else{
          dispatch(logout())
        }
    })
    .finally(() => setloading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden transition-colors duration-300'>
      <div className="absolute inset-0 opacity-20 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-400 to-purple-600 dark:from-indigo-500 dark:to-purple-700 rounded-full blur-3xl opacity-30 dark:opacity-20 -translate-y-12 translate-x-12"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-400 to-indigo-600 dark:from-blue-500 dark:to-indigo-700 rounded-full blur-3xl opacity-30 dark:opacity-20 translate-y-12 -translate-x-12"></div>
      </div>
      
      <div className='w-full block opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]'>
        <Header />
        <main className='flex-grow min-h-[calc(100vh-theme(spacing.16)-theme(spacing.64))]'>
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div>
              <Outlet />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 opacity-20 -z-10">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400 to-purple-600 dark:from-indigo-500 dark:to-purple-700 rounded-full blur-3xl opacity-40 dark:opacity-25 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center space-y-6">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500 p-1">
            <div className="rounded-full h-full w-full bg-white dark:bg-gray-900"></div>
          </div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500 animate-ping opacity-20"></div>
        </div>
        <div className="text-center animate-pulse">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-300 dark:to-purple-300 bg-clip-text text-transparent">
            Loading
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2 font-medium">Preparing your experience...</p>
        </div>
      </div>
    </div>
  )
  
}

export default App
