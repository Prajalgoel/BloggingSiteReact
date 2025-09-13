import React from 'react'
import { useSelector } from 'react-redux'
import { Container } from '../components'

function Profile() {
  const userData = useSelector(state => state.authReducer.userData)
  
  if (!userData) {
    return (
      <div className="w-full py-20">
        <Container>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Profile Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Please log in to view your profile.
            </p>
          </div>
        </Container>
      </div>
    )
  }

  return (
    <div className="w-full py-12">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500 rounded-full mb-6">
              <span className="text-3xl font-bold text-white">
                {userData.name?.charAt(0)?.toUpperCase() || userData.email?.charAt(0)?.toUpperCase() || 'U'}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {userData.name || 'User Profile'}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Manage your account information and preferences
            </p>
          </div>

          {/* Profile Information Cards */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Account Information */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-600 p-6 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                  <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white ml-4">
                  Account Information
                </h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border">
                    <p className="text-gray-900 dark:text-white font-medium">
                      {userData.name || 'Not provided'}
                    </p>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border">
                    <p className="text-gray-900 dark:text-white font-medium">
                      {userData.email}
                    </p>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    User ID
                  </label>
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border">
                    <p className="text-gray-900 dark:text-white font-mono text-sm">
                      {userData.$id}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Activity */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-600 p-6 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00-2-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H9z"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white ml-4">
                  Account Activity
                </h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Account Created
                  </label>
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border">
                    <p className="text-gray-900 dark:text-white font-medium">
                      {userData.$createdAt ? new Date(userData.$createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      }) : 'Not available'}
                    </p>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Last Updated
                  </label>
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border">
                    <p className="text-gray-900 dark:text-white font-medium">
                      {userData.$updatedAt ? new Date(userData.$updatedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      }) : 'Not available'}
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Account Status
                  </label>
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <p className="text-gray-900 dark:text-white font-medium">
                        Active
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 border border-indigo-200 dark:border-gray-600">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Quick Actions
            </h3>
            <div className="grid gap-4 md:grid-cols-3">
              <a
                href="/add-post"
                className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600 hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                </svg>
                <span className="text-gray-900 dark:text-white font-medium">Create Post</span>
              </a>
              
              <a
                href="/my-posts"
                className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600 hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                </svg>
                <span className="text-gray-900 dark:text-white font-medium">My Posts</span>
              </a>
              
              <a
                href="/"
                className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600 hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
                <span className="text-gray-900 dark:text-white font-medium">Home</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Profile