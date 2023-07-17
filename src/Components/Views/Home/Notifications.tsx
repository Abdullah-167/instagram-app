import React, { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import Image from 'next/image'


const Notifications = ({ openNotification }: any) => {
    const [searchText, setSearchText] = useState('');

    const handleClearSearch = () => {
        setSearchText('');
    };

    return (
        <div
            className={`z-[1000] absolute top-0 left-[81px] transition-all sidebar-search duration-700 delay-300 w-96 bg-white rounded-xl ${openNotification ? 'translate-x-0 z-[999]' : '-translate-x-[500px]'
                }`}
            style={{ height: '100vh' }}
        >
            <p className="text-[24px] font-bold pt-6 pb-4 px-3.5">Notifications</p>
            <p className="text-sm font-bold px-3.5 pb-5">Yesterday</p>
            <div className='flex justify-between items-center mb-8 px-3 border-b border-b-gray-300 pb-4'>
                <div className='flex gap-3 '>
                    <div>
                        <Image className='rounded-full' src={'/padhana.jpg'} alt={'Padhana'} width={45} height={45} />
                    </div>
                    <div>
                        <h3 className='text-sm'>oy_itx_padhana</h3>
                        <p className='text-[12px] text-gray-500'></p>
                    </div>
                </div>
                <span className='text-xs text-white bg-[#1877F2] px-5 rounded-lg py-2 font-bold cursor-pointer'>Follow</span>
            </div>
            <p className="text-sm font-bold px-3.5 pb-5">This week</p>
            {data.map((item, index) => {
                return (
                    <div className='flex justify-between items-center pb-5 px-3' key={index}>
                        <div className='flex gap-3 '>
                            <div>
                                <Image className='rounded-full' src={item.img} alt={'Padhana'} width={45} height={45} />
                            </div>
                            <div>
                                <h3 className='text-sm'>{item.name}</h3>
                                <p className='text-[12px] text-gray-500'></p>
                            </div>
                        </div>
                        <span className='text-xs text-white bg-[#1877F2] px-5 rounded-lg py-2 font-bold cursor-pointer'>{item.follow}</span>
                    </div>

                )
            })}
        </div>
    );
};

export default Notifications;



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