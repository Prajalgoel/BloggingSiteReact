import React from 'react'
import { Link } from 'react-router-dom'
import service from '../appwrite/config'

function PostCard({
    $id,
    title,
    featuredImage
}) {
    console.log("PostCard debug:", { $id, title, featuredImage });
    
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    {featuredImage ? (
                        <div className="w-full h-48 overflow-hidden rounded-xl">
                            <img 
                                src={service.getFilePreview(featuredImage)} 
                                alt={title} 
                                className='w-full h-full object-cover rounded-xl'
                                onError={(e) => {
                                    console.log("Image failed to load:", e.target.src);
                                    console.log("Error details:", e);
                                }}
                                onLoad={() => console.log("Image loaded successfully for:", title)}
                            />
                        </div>
                    ) : (
                        <div className='w-full h-40 bg-gray-200 rounded-xl flex items-center justify-center'>
                            <span className='text-gray-500'>No Image</span>
                        </div>
                    )}
                </div>
                <h2
                className='text-xl font-bold'
                >{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard