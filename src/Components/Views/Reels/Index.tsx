import React from 'react'
import Reels from './Reels'
import Sidebar from '../Home/Sidebar'

const Index = () => {
    return (
        <div className='flex w-full'>
            <Sidebar />
            <Reels />
        </div>
    )
}

export default Index