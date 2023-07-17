import React from 'react'
import Sidebar from './Sidebar'
import Stories from './Stories'
import Home from './Home'

const Index = () => {
    return (
        <div className='flex'>
            <div className="max-w-[700px]  mt-5">
                <Home />
            </div>
        </div>
    )
}

export default Index