import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { TbEdit } from 'react-icons/tb';
import Image from 'next/image'

const Profiles = ({ onProfileClick }: any) => {

    const [text, setText] = useState(0);
    const [searchText, setSearchText] = useState('')

    const handleTextBorder = (index: any) => {
        setText(index)
    }

    const handleProfileSearch = (e: any) => {
        setSearchText(e.target.value)
    }

    const handleProfileClick = (profile: any) => {
        onProfileClick(profile);
    };

    return (
        <div>
            <div>
                <div className='border-r border-r-gray-300 min-w-[400px] max-w-[400px] h-screen'>
                    <div className='flex items-center justify-between px-6 pt-8 pb-5'>
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <p className='text-xl font-bold'>oy_itx_padhana</p>
                            <span className='text-2xl text-gray-400 font-extralight'><MdOutlineKeyboardArrowDown /></span>
                        </div>
                        <span className='text-3xl text-gray-800 cursor-pointer'>
                            <TbEdit />
                        </span>
                    </div>
                    <input
                        value={searchText}
                        onChange={handleProfileSearch}
                        type="text"
                    />
                    <div className=''>
                        <span className={`px-10 cursor-pointer ${text === 0 ? 'border-b border-b-black ' : 'border-none'} pb-4`}
                            onClick={() => handleTextBorder(0)}
                        >Primary</span>
                        <span className={`px-10 cursor-pointer ${text === 1 ? 'border-b border-b-black ' : 'border-none'} pb-4`}
                            onClick={() => handleTextBorder(1)}
                        >General</span>
                        <span className={`text-[#50B6F9] font-semibold px-10 cursor-pointer pb-4`}
                        >Request
                        </span>
                    </div>
                    {text === 0 && (
                        <div className='pt-6 mt-[15px] border-t border-t-gray-300'>
                            {data.filter((item) =>
                                item.name.toLowerCase().includes(searchText.toLowerCase())
                            ).map((item, index) => {
                                return (
                                    <div className='flex justify-between items-center pb-5 px-3 cursor-pointer' key={index}
                                        onClick={() => handleProfileClick(item)}
                                    >
                                        <div className='flex gap-3 '>
                                            <div>
                                                <Image className='rounded-full object-cover max-w-[50px] min-w-[50px] max-h-[50px] min-h-[50px]' src={item.img} alt={'Padhana'} width={50} height={50} />
                                            </div>
                                            <div>
                                                <h3 className='text-sm pt-1'>{item.name}</h3>
                                                <p className='text-xs pt-1s text-gray-500'>{item.message}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                    {text === 1 && (
                        <div className='pt-6 mt-[15px] border-t border-t-gray-300'>
                            <p className='text-center pt-40'>
                                No messages found.
                            </p>
                        </div>

                    )}
                </div>
            </div>
        </div>
    )
}

export default Profiles



const data = [
    {
        img: '/padhana.jpg',
        name: 'oy_itx_padhana',
        follow: 'Follow',
        message: 'You sent a message',
    },
    {
        img: '/girl3.webp',
        name: 'Lana',
        follow: 'Follow',
        message: 'You sent a message',
    },
    {
        img: '/padhana.jpg',
        name: 'oy_itx_padhana',
        follow: 'Follow',
        message: 'You sent a message',
    },
    {
        img: '/padhana.jpg',
        name: 'oy_itx_padhana',
        follow: 'Follow',
        message: 'You sent a message',
    },
    {
        img: '/padhana.jpg',
        name: 'oy_itx_padhana',
        follow: 'Follow',
        message: 'You sent a message',
    },
]