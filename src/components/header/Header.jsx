import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Header() {
  const authStatus = useSelector(state => state.authReducer.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name : "Home",
      slug : "/",
      active : true
    },
    {
      name : "Login",
      slug : "/login",
      active : !authStatus
    },
    {
      name : "Signup",
      slug : "/signup",
      active : !authStatus
    },
    {
      name : "All Posts",
      slug : "/all-posts",
      active : authStatus
    },
    {
      name : "Add Post",
      slug : "/add-post",
      active : authStatus
    }
  ]

  return (
    <header className='sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-white/20 shadow-lg'>
      <Container>
        <nav className='flex items-center h-16'>
          <div className='flex items-center'>
            <Link to="/" className='hover:scale-105 transition-transform duration-200'>
              <Logo width='70px' />
            </Link>
          </div>

          <ul className='flex ml-auto items-center space-x-1'>
            {
              navItems.map((navItem) => 
              navItem.active ? (
                <li key={navItem.name}>
                  <button
                  onClick={() => navigate(navItem.slug)}
                  className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200 transform hover:scale-105'
                  >
                    {navItem.name}
                  </button>
                </li>
              ) : null
              )
            }

            {
              authStatus && (
                <li>
                  <LogoutBtn /> 
                </li>
              )
            }
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header