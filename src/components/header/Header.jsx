import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import ThemeToggle from '../ThemeToggle'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function Header() {
  const authStatus = useSelector(state => state.authReducer.status)

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
      name : "My Posts",
      slug : "/my-posts",
      active : authStatus
    },
    {
      name : "Add Post",
      slug : "/add-post",
      active : authStatus
    }
  ]

  return (
    <header className='sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/90 border-b border-white/20 dark:border-gray-700/50 shadow-lg transition-colors duration-300'>
      <Container>
        <nav className='flex items-center h-16'>
          <div className='flex items-center'>
            <NavLink to="/" className='hover:scale-105 transition-transform duration-200'>
              <Logo width='70px' />
            </NavLink>
          </div>

          <ul className='flex ml-auto items-center space-x-1'>
            {
              navItems.map((navItem) => 
              navItem.active ? (
                <li key={navItem.name}>
                  <NavLink
                    to={navItem.slug}
                    className={({ isActive }) =>
                      `inline-flex items-center px-4 py-2 text-sm font-medium transition-all duration-200 transform hover:scale-105 rounded-lg ${
                        isActive 
                          ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800/50 font-semibold' 
                          : 'text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800/80'
                      }`
                    }
                  >
                    {navItem.name}
                  </NavLink>
                </li>
              ) : null
              )
            }

            <li>
              <ThemeToggle />
            </li>

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