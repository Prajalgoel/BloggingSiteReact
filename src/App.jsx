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
    <div className='min-h-screen flex flex-wrap content-between bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'>
      <div className='w-full block'>
        <Header />
        <main className='flex-grow'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600"></div>
    </div>
  )
  
}

export default App
