import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'

function Home() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
            setLoading(false)
        }).catch(() => {
            setLoading(false)
        })
    }, [])
  
    if (loading) {
        return (
            <div className="w-full py-20 mt-4">
                <Container>
                    <div className="flex flex-col items-center justify-center py-20">
                        <div className="relative">
                            <div className="animate-spin rounded-full h-16 w-16 border-4 border-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500 p-1">
                                <div className="rounded-full h-full w-full bg-white dark:bg-gray-950"></div>
                            </div>
                            <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500 animate-ping opacity-20"></div>
                        </div>
                        <div className="text-center mt-6 animate-pulse">
                            <h2 className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-300 dark:to-purple-300 bg-clip-text text-transparent">
                                Loading Posts...
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mt-2">Please wait while we fetch the latest content</p>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    if (posts.length === 0) {
        return (
            <div className="w-full py-20 mt-4">
                <Container>
                    <div className="text-center">
                        <div className="max-w-md mx-auto">
                            <div className="mb-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-4">
                                    <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                    </svg>
                                </div>
                            </div>
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                Welcome to Our Blog
                            </h1>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                                Discover amazing stories and insights from our community of writers.
                            </p>
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 dark:border-gray-700/50 shadow-lg">
                                <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-4">
                                    Ready to explore?
                                </p>
                                <p className="text-gray-700 dark:text-gray-200">
                                    Sign in to access exclusive content and join our growing community of readers and writers.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-12'>
            <Container>
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Latest Stories</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Explore our collection of articles, insights, and stories from talented writers around the world.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {posts.map((post) => (
                        <div key={post.$id} className='transform transition-all duration-300 hover:scale-105'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home