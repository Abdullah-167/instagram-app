import React from 'react'
import Sidebar from './Sidebar'
import Slider from './Sidebar'

const Layout = ({ children }: any) => {
    return (
        <div className='grid grid-cols-2'>
            <Sidebar />
            {children}
        </div>
    )
}

export default Layout