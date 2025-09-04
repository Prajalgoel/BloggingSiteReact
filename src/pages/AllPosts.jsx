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
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div className='p-2 w-1/4' key={post.$id}>
                        <PostCard 
                            $id={post.$id}
                            title={post.title}
                            featuredImage={post.featuredImage}
                        />
                    </div>
                ))}

            </div>
        </Container>
    </div>
  )
}

export default AllPosts