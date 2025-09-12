import React from 'react'
import { Link } from 'react-router-dom'
import service from '../appwrite/config'

function PostCard({
    $id,
    title,
    featuredImage
}) {
    return (
        <Link to={`/post/${$id}`} className="block group">
            <div className='w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-white/30 dark:border-gray-700/50 transition-all duration-300 hover:shadow-xl hover:bg-white dark:hover:bg-gray-800'>
                <div className='relative overflow-hidden'>
                    {featuredImage ? (
                        <div className="w-full h-48 overflow-hidden">
                            <img 
                                src={service.getFilePreview(featuredImage)} 
                                alt={title} 
                                className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                            />
                        </div>
                    ) : (
                        <div className='w-full h-48 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center'>
                            <div className="text-center">
                                <svg className="w-12 h-12 text-indigo-400 dark:text-indigo-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                                <span className='text-indigo-500 dark:text-indigo-300 text-sm font-medium'>No Image</span>
                            </div>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                    <h2 className='text-xl font-bold text-gray-900 dark:text-gray-50 leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 line-clamp-2'>
                        {title}
                    </h2>
                    <div className="mt-4 flex items-center text-sm">
                        <span className="bg-indigo-100 dark:bg-indigo-900/60 text-indigo-600 dark:text-indigo-300 px-2 py-1 rounded-full text-xs font-medium">
                            Article
                        </span>
                        <span className="ml-auto text-gray-500 dark:text-gray-400 font-medium">
                            Read more →
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PostCard