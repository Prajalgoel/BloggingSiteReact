import React, { useState } from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import ThemeToggle from '../ThemeToggle'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function Header() {
  const authStatus = useSelector(state => state.authReducer.status)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

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
    },
    {
      name : "Profile",
      slug : "/profile",
      active : authStatus
    }
  ]

  return (
    <header className='sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/90 border-b border-white/20 dark:border-gray-700/50 shadow-lg transition-colors duration-300'>
      <Container>
        <nav className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='flex items-center'>
            <NavLink to="/" className='hover:scale-105 transition-transform duration-200'>
              <Logo width='70px' />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <ul className='hidden lg:flex items-center space-x-1'>
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

          {/* Mobile Menu Controls */}
          <div className='lg:hidden flex items-center space-x-2'>
            <ThemeToggle />
            {authStatus && <LogoutBtn />}
            
            {/* Hamburger Button */}
            <button
              onClick={toggleMobileMenu}
              className='p-2 rounded-lg text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200'
              aria-label="Toggle mobile menu"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}>
          <div className='py-4 space-y-2 border-t border-gray-200 dark:border-gray-700'>
            {
              navItems.map((navItem) => 
              navItem.active ? (
                <NavLink
                  key={navItem.name}
                  to={navItem.slug}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                      isActive 
                        ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-indigo-600 dark:border-indigo-400 font-semibold' 
                        : 'text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800/80'
                    }`
                  }
                >
                  {navItem.name}
                </NavLink>
              ) : null
              )
            }
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header