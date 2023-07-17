import React from 'react'
import Sidebar from '../Home/Sidebar'
import UserInformation from './UserInformation'

const Index = () => {

    return (
        <div className='flex justify-center w-full'>
            <Sidebar />
            <UserInformation />
        </div>
    )
}

export default Index