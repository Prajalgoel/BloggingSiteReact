import React, { useEffect } from 'react'
import { useState } from 'react'
import service from '../appwrite/config'
import { Container, PostCard } from '../components'

function AllPosts() {
    const [posts, setposts] = useState([])

    useEffect(() => {
        service.getPosts([]).then((posts) => {
            if (posts) {
                setposts(posts.documents)
            }
        } )
    }, [])

  return (
    <div className='w-full py-12'>
        <Container>
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">All Posts</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Browse through all our published articles and discover something new.
                </p>
            </div>
            
            {posts.length === 0 ? (
                <div className="text-center py-20">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No Posts Yet</h3>
                    <p className="text-gray-600">Be the first to share your story with the world!</p>
                </div>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {posts.map((post) => (
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
        </Container>
    </div>
  )
}

export default AllPosts