import React from 'react'
import { FaFacebookMessenger } from 'react-icons/fa';

const Messages = () => {
    return (
        <div className='flex justify-center items-center w-full text-center'>
            <div>
                <div className='max-w-[96px] border-[2px] border-black mx-auto rounded-full p-4 mb-3'>
                    <span className='text-6xl'> <FaFacebookMessenger /> </span>
                </div>
                <p className='text-xl font-normal pb-2'>Your messages</p>
                <p className='text-gray-500 pb-4 text-sm'>Send private photos and messages to a friend or group</p>
                <span className='text-sm text-white bg-[#5a9ef7] px-5 rounded-lg py-2 font-bold cursor-pointer'>Send Message</span>
            </div>
        </div>
    )
}

export default Messages