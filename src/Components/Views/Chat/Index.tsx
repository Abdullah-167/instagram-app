import React from 'react'
import Sidebar from '../Home/Sidebar'
import Profiles from './Profiles'
import Messages from './Messages'
import InChat from './InChat'

const Index = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <Profiles />
            {/* <Messages /> */}
            <InChat />
        </div>
    )
}

export default Index