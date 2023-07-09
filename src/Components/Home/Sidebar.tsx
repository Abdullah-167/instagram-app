import Image from 'next/image'
import React, { useState, useRef } from 'react'
import { GrHomeRounded } from 'react-icons/gr';
import { BsSearch, BsClockHistory, BsBookmark, BsPlayCircle } from 'react-icons/bs';
import { AiOutlineCompass } from 'react-icons/ai';
import { VscDiffAdded } from 'react-icons/vsc';
import { CgProfile } from 'react-icons/cg';
import { SlMenu } from 'react-icons/sl';
import { IoSettingsOutline } from 'react-icons/io5';
import { GoReport } from 'react-icons/go';
import { FaFacebookMessenger, FaRegHeart } from 'react-icons/fa';
import useOutsideClick from '../Hooks/useOutsideClick';

const Sidebar = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null);

  const handleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  useOutsideClick(menuRef, handleCloseMenu);

  return (
    <div className='max-w-[200px] min-w-[200px] border-r border-r-gray-300 sticky top-0 pr-2' style={{ height: '100vh' }}>
      <div className='py-8 h-full  '>
        <div className='flex pl-6 mb-6'>
          <Image src={'/logo.png'} alt={'logo'} width={100} height={100} />
        </div>
        <div className='flex flex-col justify-center pl-3'>
          {data.map((item, index) => {
            return (
              <div className='flex items-center gap-4 my-0.5 max-w-[200px] hover:bg-gray-100 pl-4 rounded-md py-3 cursor-pointer transition-all duration-700' key={index}
                onClick={() => index === 8 && handleMenu()}
              >
                <span className={`text-2xl `}>{item.icon}</span>
                <p>{item.text}</p>
              </div>
            )
          })}
        </div>
        {menuOpen && (
          <div className='absolute left-3 bottom-16 bg-white shadow-2xl max-w-[250px]  min-w-[250px] rounded-xl py-3 z-[1000]'>
            <div className='border-b-[5px] border-b-gray-200 py-2 z-[1000]'>
              <div className='px-4'>
                {menuData.map((item, index) => {
                  return (
                    <div className='flex items-center gap-4 my-0.5  hover:bg-gray-100 pl-4 rounded-md py-3 cursor-pointer transition-all duration-700' key={index}>
                      <span className='text-xl'>{item.icon}</span>
                      <p className='text-[16px]'>{item.text}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <div>
              <p className=' my-0.5  hover:bg-gray-100 pl-4 rounded-md py-3 cursor-pointer transition-all duration-700 mx-4 mb-2'>
                Switch Accounts
              </p>
              <p className=' my-0.5  hover:bg-gray-100 pl-4 rounded-md py-3 cursor-pointer transition-all duration-700 mx-4 mb-2'>
                Log Out
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Sidebar


const data = [
  {
    text: 'Home',
    icon: <GrHomeRounded />
  },
  {
    text: 'Search',
    icon: <BsSearch />
  },
  {
    text: 'Explore',
    icon: <AiOutlineCompass />
  },
  {
    text: 'Reels',
    icon: <BsPlayCircle />
  },
  {
    text: 'Messages',
    icon: <FaFacebookMessenger />
  },
  {
    text: 'Likes',
    icon: <FaRegHeart />
  },
  {
    text: 'Create',
    icon: <VscDiffAdded />
  },
  {
    text: 'Profile',
    icon: <CgProfile />
  },
  {
    text: 'More',
    icon: <SlMenu />
  },
]



const menuData = [
  {
    icon: <IoSettingsOutline />,
    text: 'Settings'
  },
  {
    icon: <BsClockHistory />,
    text: 'Activity'
  },
  {
    icon: <IoSettingsOutline />,
    text: 'Settings'
  },
  {
    icon: <BsBookmark />,
    text: 'Saved'
  },
  {
    icon: <GoReport />,
    text: 'Report a problem'
  },
]