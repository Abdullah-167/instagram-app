import React from 'react'
import Stories from './Stories'
import RightBar from './RightBar'
import Post from './Post'

const Home = () => {
    return (
            <div className='relative max-w-[650px] mx-auto'>
                <Stories />
                <Post />
            </div>
    )
}

export default Home

