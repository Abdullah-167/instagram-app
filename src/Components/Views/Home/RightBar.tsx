import Image from 'next/image'
import React, { useState, useRef } from 'react'

const RightBar = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef(null);

    const handleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const handleCloseMenu = () => {
        setMenuOpen(false);
    };


    return (
        <div className='min-w-[322px] max-w-[322px] pt-14'>
            <div className='flex justify-between items-center pb-5'>
                <div className='flex gap-5 items-center'>
                    <div>
                        <Image className='rounded-full' src={'/padhana.jpg'} alt={'Padhana'} width={57} height={57} />
                    </div>
                    <div>
                        <h3 className='font-semibold'>oy_itx_padhana</h3>
                        <p className='text-sm text-gray-500'>Ch Abdullah Padhana</p>
                    </div>
                </div>
                <span className='text-sm text-blue-400 font-semibold cursor-pointer'>Switch</span>
            </div>
            <div className='flex justify-between pb-5'>
                <span className='text-sm text-gray-500 font-semibold'>Suggested for you</span>
                <span className='text-xs font-semibold hover:text-gray-500 cursor-pointer'>See All</span>
            </div>
            {data.map((item, index) => {
                return (

                    <div key={index} className='flex justify-between items-center pb-3'>
                        <div className='flex gap-3 items-center'>
                            <div>
                                <Image className='rounded-full' src={item.img} alt={'Padhana'} width={35} height={35} />
                            </div>
                            <div>
                                <h3 className='font-semibold'>{item.name}</h3>
                                <p className='text-[12px] text-gray-500'>{item.followdBy}</p>
                            </div>
                        </div>
                        <span className='text-xs text-blue-400 font-semibold cursor-pointer'>{item.follow}</span>
                    </div>

                )
            })}
        </div>
    )
}

export default RightBar



const data = [
    {
        img: '/padhana.jpg',
        name: 'oy_itx_padhana',
        follow: 'Follow',
        followdBy: 'Followed by Ali + 2 more',
    },
    {
        img: '/padhana.jpg',
        name: 'oy_itx_padhana',
        follow: 'Follow',
        followdBy: 'Followed by Ali + 2 more',
    },
    {
        img: '/padhana.jpg',
        name: 'oy_itx_padhana',
        follow: 'Follow',
        followdBy: 'Followed by Ali + 2 more',
    },
    {
        img: '/padhana.jpg',
        name: 'oy_itx_padhana',
        follow: 'Follow',
        followdBy: 'Followed by Ali + 2 more',
    },
    {
        img: '/padhana.jpg',
        name: 'oy_itx_padhana',
        follow: 'Follow',
        followdBy: 'Followed by Ali + 2 more',
    },
]