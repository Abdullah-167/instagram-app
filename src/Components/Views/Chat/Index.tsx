import React from 'react'
import Sidebar from '../Home/Sidebar'
import Profiles from './Profiles'
import Messages from './Messages'

const Index = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <Profiles />
            <Messages />
        </div>
    )
}

export default Index