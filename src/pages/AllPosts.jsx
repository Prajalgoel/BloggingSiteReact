import React, { useEffect } from 'react'
import { useState } from 'react'
import service from '../appwrite/config'
import { Container, PostCard } from '../components'
import { useSelector } from 'react-redux'
import { Query } from 'appwrite'

function AllPosts() {
    const [posts, setposts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')
    const userData = useSelector(state => state.authReducer.userData)

    useEffect(() => {
        if (userData?.$id) {
            // Filter posts by the current user's ID
            const queries = [
                Query.equal("status", "active"),
                Query.equal("userID", userData.$id)
            ]
            
            service.getPosts(queries).then((posts) => {
                if (posts) {
                    setposts(posts.documents)
                    setFilteredPosts(posts.documents)
                }
                setLoading(false)
            }).catch(() => {
                setLoading(false)
            })
        } else {
            setLoading(false)
        }
    }, [userData])

    // Filter posts based on search term
    useEffect(() => {
        if (searchTerm.trim() === '') {
            setFilteredPosts(posts)
        } else {
            const filtered = posts.filter(post => 
                post.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            setFilteredPosts(filtered)
        }
    }, [searchTerm, posts])

  return (
    <div className='w-full py-12'>
        <Container>
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Posts</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                    Manage and view all your published articles in one place.
                </p>
                
                {/* Search Bar - Only show if user has posts */}
                {posts.length > 0 && (
                    <div className="max-w-md mx-auto mb-8">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Search your posts by title..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg leading-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 transition duration-200"
                            />
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm('')}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                                >
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </div>
            
            {loading ? (
                <div className="flex flex-col items-center justify-center py-20">
                    <div className="relative">
                        <div className="animate-spin rounded-full h-16 w-16 border-4 border-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500 p-1">
                            <div className="rounded-full h-full w-full bg-white dark:bg-gray-950"></div>
                        </div>
                        <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500 animate-ping opacity-20"></div>
                    </div>
                    <div className="text-center mt-6 animate-pulse">
                        <h2 className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-300 dark:to-purple-300 bg-clip-text text-transparent">
                            Loading Your Posts...
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mt-2">Fetching your published articles</p>
                    </div>
                </div>
            ) : posts.length === 0 ? (
                <div className="text-center py-20">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-4">
                        <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No Posts Yet</h3>
                    <p className="text-gray-600 dark:text-gray-300">You haven't created any posts yet. Start writing to share your thoughts!</p>
                </div>
            ) : (
                <>
                    {/* Search Results Info */}
                    {searchTerm && (
                        <div className="text-center mb-6">
                            <p className="text-gray-600 dark:text-gray-300">
                                {filteredPosts.length > 0 
                                    ? `Found ${filteredPosts.length} post${filteredPosts.length === 1 ? '' : 's'} matching "${searchTerm}"`
                                    : `No posts found matching "${searchTerm}"`
                                }
                            </p>
                        </div>
                    )}

                    {filteredPosts.length === 0 && searchTerm ? (
                        <div className="text-center py-12">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
                                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No Results Found</h3>
                            <p className="text-gray-600 dark:text-gray-300">No posts match your search. Try different keywords.</p>
                        </div>
                    ) : (
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                            {filteredPosts.map((post) => (
                                <div key={post.$id} className='transform transition-all duration-300 hover:scale-105'>
                                    <PostCard 
                                        $id={post.$id}
                                        title={post.title}
                                        featuredImage={post.featuredImage}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )}
        </Container>
    </div>
  )
}

export default AllPosts