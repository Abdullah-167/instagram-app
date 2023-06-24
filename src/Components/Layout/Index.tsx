import React from 'react'
import Sidebar from './Sidebar'
import Stories from './Stories'
import LeftSide from './LeftSide'

const Layout = ({ children }: any) => {
    return (
        <div className='grid grid-cols-12'>
            <Sidebar />
        </div>
    )
}

export default Layout;