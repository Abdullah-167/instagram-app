import React from 'react'
import UserInformation from './UserInformation'
import Sidebar from '../../Home/Sidebar'

const Index = () => {

    return (
        <div className='flex justify-center w-full'>
            <Sidebar />
            <UserInformation />
        </div>
    )
}

export default Index