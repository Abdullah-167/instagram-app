import React from 'react'
import Stories from './Stories'
import RightBar from './RightBar'
import Post from './Post'

const Home = () => {
    return (
        <div className=''>
            <div className='relative '>
                <Stories />
                <Post />
            </div>
        </div>
    )
}

export default Home

