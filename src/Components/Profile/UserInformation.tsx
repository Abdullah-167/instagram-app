import Image from 'next/image'
import React from 'react'
import { IoSettingsOutline } from 'react-icons/io5';

const UserInformation = () => {
    return (
        <div>
            <div className='flex justify-center gap-[100px] mx-auto w-full flex-grow'>
                <div>
                    <Image src={'/padhana.jpg'} className='rounded-full' alt={''} width={150} height={150} />
                </div>
                <div>
                    <div>
                        <div className='flex items-center gap-6 pb-5'>
                            <h1 className='text-xl font-medium'>oy_itx_padhana</h1>
                            <div className='flex gap-3 items-center'>
                                <span className='bg-[#f1f1f1] px-4 py-1.5 rounded-lg font-semibold text-sm cursor-pointer'>
                                    Edit Profile
                                </span>
                                <span className='bg-[#f1f1f1] px-4 py-1.5 rounded-lg font-semibold text-sm cursor-pointer'>
                                    Add Tools
                                </span>
                            </div>
                            <span className='text-2xl'>
                                <IoSettingsOutline />
                            </span>
                        </div>
                        <div className='flex gap-10'>
                            <p className=' font-medium'> <span className='font-semibold'> 1 </span> post</p>
                            <p className=' font-medium'> <span className='font-semibold'> 445 </span> followers</p>
                            <p className=' font-medium'> <span className='font-semibold'> 599 </span> following</p>
                        </div>
                        <div>
                            <p className='font-semibold'>Ch Abdullah Padhana</p>
                            <p className='font-medium text-gray-500 text-sm'>Web Designer</p>
                            <p className='font-[500] pl-20'>💖💫فَبِاَىِّ اٰلَاۤءِ رَبِّكُمَا تُكَذِّبٰن</p>
                            <p className='font-[500] pl-44'>🏴✋یا علی</p>
                            <p className='font-[500]'>Merci d'avoir priorisé mes mots🍂🤞</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInformation