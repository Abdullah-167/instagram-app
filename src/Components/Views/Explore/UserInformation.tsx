import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { IoSettingsOutline } from 'react-icons/io5';
import { BsPlusLg } from 'react-icons/bs';
import { RxDashboard } from 'react-icons/rx';
import { BiBookmark } from 'react-icons/bi';
import { FaHeart, FaRegComment } from 'react-icons/fa';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { TbMessageCircle } from 'react-icons/tb';
import { RxCross2 } from 'react-icons/rx';
import { GrEmoji } from 'react-icons/gr';
import { HiOutlineIdentification } from 'react-icons/hi';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import Link from 'next/link';

const UserInformation = () => {


    const [open, setOpen] = useState(false);
    const [commentbox, setSommentbox] = useState(false);
    const [liked, setliked] = useState(false);
    const [likedPosts, setLikedPosts] = useState<number[]>([]);
    const [commentLikes, setcommentLikes] = useState<number[]>([]);
    const [commentText, setCommentText] = useState('');
    const [sendPstTo, setSendPstTo] = useState(false);
    const [checkedIndices, setCheckedIndices] = useState<number[]>([]);
    const [postBookMark, setPostBookMark] = useState<number[]>([]);
    const [innerCommentMark, setInnerCommentMark] = useState(false)
    const [searchText, setSearchText] = useState('');

    const handleDivClick = (index: any) => {
        if (checkedIndices.includes(index)) {
            setCheckedIndices(checkedIndices.filter((checkedIndex) => checkedIndex !== index));
        } else {
            setCheckedIndices([...checkedIndices, index]);
        }
    };

    const handleCommentBox = () => {
        setSommentbox(!commentbox)
    }

    const handleOpen = (id: any) => {
        setOpen(id);
    };

    const handleOpenTwo = () => {
        setOpen(!open);
    };

    const handleLike = () => {
        setliked(!liked);
    };


    const handlePostLike = (index: number) => {
        if (likedPosts.includes(index)) {
            setLikedPosts(likedPosts.filter((likedIndex) => likedIndex !== index));
        } else {
            setLikedPosts([...likedPosts, index]);
        }
    };


    const handleCommentLikes = (index: number) => {
        if (commentLikes.includes(index)) {
            setcommentLikes(commentLikes.filter((likedComments) => likedComments !== index));
        } else {
            setcommentLikes([...commentLikes, index]);
        }
    };


    const handlePostBookMatk = (index: any) => {
        if (postBookMark.includes(index)) {
            setPostBookMark(postBookMark.filter((bookMarkedPost) => bookMarkedPost != index));
        } else {
            setPostBookMark([...postBookMark, index]);
        }
    }


    const handleCommentTextChange = (e: any) => {
        setCommentText(e.target.value);
    };

    const handleSendPost = (id: any) => {
        setSendPstTo(id)
    }

    const handleSendPostCmntBox = () => {
        setSendPstTo(!sendPstTo)
    }


    const handleProfileNameClick = (index: any) => {
        setCheckedIndices(checkedIndices.filter((checkedIndex) => checkedIndex !== index));
    };

    const handleInputChange = (e: any) => {
        setSearchText(e.target.value);
    };

    const handleInnerCommentBookMark = () => {
        setInnerCommentMark(!innerCommentMark)
    }

    useEffect(() => {
        if (open) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    }, [open]);


    useEffect(() => {
        if (commentbox) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    }, [commentbox]);


    useEffect(() => {
        if (sendPstTo) {
            document.body.classList.add('modal-open')
        } else {
            document.body.classList.remove('modal-open')

        }
    }, [sendPstTo])

    return (
        <div className='w-full max-w-[950px] mx-auto relative'>
            <div className='grid grid-cols-3 '>
                {postData.map((item, index) => {

                    return (
                        <div
                            className={`my-2 relative post-icons ${index === 2 ? 'col-start-3 row-start-1 row-end-3' : ''}`}
                            key={index}
                        >
                            <div className='hoverable cursor-pointer' onClick={handleCommentBox}>
                                <Image src={item.img} className={` object-cover ${index === 2 ? ' min-h-[655px]' : 'max-h-[320px]'}`} alt='' width={310} height={300} />
                                <div className={`absolute inset-0 flex items-center justify-center ${index === 2 ? 'min-h-[655px]' : ''} w-[310px] max-h-[320px] bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-500`}>
                                    <div className='post-icon-group opacity-0 text-white font-bold'>
                                        <span className='flex items-center'>
                                            <FaHeart className='mr-2' size={20} />
                                            {item.likes}
                                        </span>
                                        <span className='flex items-center'>
                                            <FaRegComment className='mr-2' size={20} />
                                            {item.comments}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {commentbox && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-20">
                    <div className='flex items-center max-w-[915px]'>
                        <div className='pb-5 max-w-[550px]'>
                            <div>
                                <Image className='min-h-[519px] max-h-[519px] object-cover rounded-sm pt-5' src={'/mainPadhana.jpg'} alt={''} width={550} height={900} />
                            </div>
                        </div>
                        <div className="bg-white shadow-2xl min-w-[300px] max-w-[500px] w-full py-3 min-h-[490px] rounded-r-xl">
                            <div className='flex justify-end'>
                                <span className='text-2xl px-3 cursor-pointer'
                                    onClick={() => setSommentbox(false)}
                                >
                                    <RxCross2 />
                                </span>
                            </div>
                            <div className=" py-2">
                                <div className="px-4">
                                    <div>
                                        <div className='flex items-center justify-between mb-6'>
                                            <div className='flex gap-1.5 items-center'>
                                                <Image className='rounded-full' src={'/padhana.jpg'} alt={'post-img'} width={45} height={45} />
                                                <div>
                                                    <h2 className='pl-1.5 font-semibold cursor-pointer pb-0'>Le_Backbenchers</h2>
                                                    <span className='text-[12px] px-1.5'>Original Audio</span>
                                                </div>
                                            </div>
                                            <div className='cursor-pointer hover:text-gray-400' onClick={() => handleOpenTwo()}>
                                                <HiOutlineDotsHorizontal />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='py-4 mb-2 items-center min-h-[250px] max-h-[250px] border-t border-b border-t-gray-200 border-b-gray-200 overflow-auto'
                                    style={{
                                        scrollbarWidth: 'none'
                                    }}
                                >
                                    {commentData.map((item, index) => {
                                        return (
                                            <div className='flex justify-between py-2 px-3' key={index}>
                                                <div className='flex gap-1.5 items-center px-2'>
                                                    <Image className='rounded-full max-w-[35px] min-w-[35px] max-h-[35px] min-h-[35px] object-cover' src={item.img} alt={'comment-img'} width={30} height={30} />
                                                    <div className='flex'>
                                                        <div>
                                                            <div className='flex gap-2 items-center'>
                                                                <span className='pl-1.5 font-semibold text-sm cursor-pointer pb-0'>{item.profilename}</span>
                                                                <span className='text-xs font-medium'>{item.comment} </span>
                                                            </div>
                                                            <div>
                                                                <span className='text-[12px] px-1.5 text-gray-500'>{item.time}</span>
                                                                <span className='text-[12px] px-1.5 text-gray-500'>{item.likes}</span>
                                                                <span className='text-[12px] px-1.5 text-gray-500'>{item.reply}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span
                                                    className={`cursor-pointer px-2 ${commentLikes.includes(index) ? 'text-red-500' : ''}`}
                                                    onClick={() => handleCommentLikes(index)}
                                                >
                                                    {commentLikes.includes(index) ? <AiFillHeart /> : item.likebtn}
                                                </span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className='flex text-[26px] justify-between font-[100] px-[20px] pb-3'>
                                    <div className='flex gap-2 items-center'>
                                        <span
                                            className={`cursor-pointer  ${liked ? 'text-red-500' : 'hover:text-gray-400 '}`}
                                            onClick={() => handleLike()}
                                        >
                                            {liked ? < AiFillHeart /> : <AiOutlineHeart />}
                                        </span>
                                        <span className='cursor-pointer  hover:text-gray-400'>
                                            <TbMessageCircle />
                                        </span>
                                        <span onClick={() => handleSendPostCmntBox()} className='cursor-pointer hover:text-gray-400'>
                                            <FiSend />
                                        </span>
                                    </div>
                                    <span className={`cursor-pointer ${innerCommentMark ? '' : 'hover:text-gray-400'}`}
                                        onClick={() => handleInnerCommentBookMark()}
                                    >
                                        {innerCommentMark ? <FaBookmark /> : <FaRegBookmark />}
                                    </span>
                                </div>
                                <div className='px-6 pb-2'>
                                    <h3 className='text-sm font-semibold leading-[6px]'>542 Likes</h3>
                                    <span className='text-gray-500 text-[12px]'>1 hour ago</span>
                                </div>
                                <div className='flex items-center px-6 gap-1'>
                                    <span className='text-2xl font-bold'>
                                        <GrEmoji />
                                    </span>
                                    <span>
                                        <input
                                            className='outline-none max-w-full w-[400px] px-1 py-1 text-sm'
                                            placeholder='Add A Comment'
                                            type='text'
                                            value={commentText}
                                            onChange={handleCommentTextChange}
                                        />
                                    </span>
                                    <span className=''>
                                        <button
                                            className={`${commentText ? 'text-blue-500 cursor-pointer' : 'text-gray-400'
                                                }`} disabled={!commentText}
                                        >
                                            Post
                                        </button>
                                    </span>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {open && (
                <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-[1000]`}>
                    <div className="bg-white shadow-2xl max-w-[400px] w-full rounded-xl py-3">
                        <div className='flex justify-end'>
                            <span className='text-2xl px-5 cursor-pointer'
                                onClick={() => setOpen(false)}
                            >
                                <RxCross2 />
                            </span>
                        </div>
                        <div className=" py-2">
                            <div className="px-4">
                                {menuData.map((item, index) => (
                                    <div
                                        className="gap-4 my-0.5 hover:bg-gray-100 pl-4 border-b border-b-gray-200 text-center rounded-md py-2 cursor-pointer transition-all duration-700"
                                        key={index}
                                    >
                                        <p className={`text-[16px] ${index === 0 || index === 1 ? 'text-red-500 font-semibold' : ''}`}>{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            )}

            {sendPstTo && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-20">
                    <div className="bg-white shadow-2xl min-w-[300px] max-w-[500px] w-full py-3 rounded-xl relative">
                        <div className='grid grid-cols-3 place-items-center gap-40'>
                            <span></span>
                            <span className='text-xl font-semibold'>
                                Share
                            </span>
                            <span className='text-2xl px-3 cursor-pointer' >
                                <RxCross2
                                    onClick={() => setSendPstTo(false)}
                                />
                            </span>
                        </div>
                        <div className="py-2">
                            <div className='flex gap-5 px-6 mb-6 items-center'>
                                <span className='font-semibold'>To:</span>
                                <div className='flex flex-wrap gap-2'>
                                    <input
                                        className='outline-none w-full text-sm'
                                        type='text'
                                        placeholder='Search...'
                                        value={searchText}
                                        onChange={handleInputChange}
                                    />
                                    {checkedIndices.map((index) => {
                                        return (
                                            <div
                                                key={index}
                                                className='bg-[#E0F1FF] text-[#1aa0f7] flex gap-2 items-center font-semibold px-4 py-0.5 rounded-xl cursor-pointer'
                                                onClick={() => handleProfileNameClick(index)}
                                            >
                                                <span className='hover:text-[#0f0b31]'>{commentData[index]?.profilename}</span>
                                                <RxCross2 />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className='py-4 mb-2 items-center min-h-[300px] max-h-[300px] border-t border-b border-t-gray-200 border-b-gray-200 overflow-auto'
                                style={{
                                    scrollbarWidth: 'none'
                                }}
                            >
                                <span className='text-sm font-semibold px-6'>Suggested</span>
                                {commentData.filter((item) =>
                                    item.profilename.toLowerCase().includes(searchText.toLowerCase()) ||
                                    item.comment.toLowerCase().includes((searchText.toLowerCase()))
                                ).map((item, index) => {
                                    const isChecked = checkedIndices.includes(index);
                                    return (
                                        <div
                                            className={`flex justify-between py-2 px-3 cursor-pointer ${isChecked ? 'checked' : ''}`}
                                            key={index}
                                            onClick={() => handleDivClick(index)}
                                        >
                                            <div className='flex gap-1.5 items-center px-2'>
                                                <Image className='rounded-full min-w-[45px] min-h-[45px] max-w-[45px] max-h-[45px] object-cover' src={item.img} alt={'comment-img'} width={45} height={45} />
                                                <div className='flex'>
                                                    <div>
                                                        <span className='block font-semibold text-sm cursor-pointer leading-0'>{item.profilename}</span>
                                                        <span className='text-xs font-medium leading-0'>{item.comment}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <input type='checkbox' name={`checkbox-${index}`} checked={isChecked} className='custom-checkbox' />
                                        </div>
                                    );
                                })}
                            </div>
                            <input
                                className={`outline-none px-6 py-3 text-sm absolute w-full max-w-[490px] transition-all duration-300 ${checkedIndices.length > 0 ? 'opacity-100 bottom-14' : 'opacity-0 bottom-12'}`}
                                placeholder='Write A Message'
                                type='text'
                            />
                            <div className='mx-6'>
                                <button
                                    className={`bg-[#B1DEFC] w-full rounded-lg py-1 text-gray-100 ${checkedIndices.length === 0 ? 'cursor-not-allowed opacity-50' : 'bg-blue-400 text-white'}`}
                                    disabled={checkedIndices.length === 0}
                                >
                                    {checkedIndices.length > 1 ? 'Send Separately' : 'Send'}
                                </button>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default UserInformation



const commentData = [
    {
        id: 1,
        img: '/girl1.webp',
        profilename: 'Alexa',
        comment: 'alex123',
        time: '17m',
        likes: '128',
        reply: 'Reply',
        likebtn: <AiOutlineHeart />,
    },
    {
        id: 2,
        img: '/girl2.jpeg',
        profilename: 'Rute',
        comment: 'rute123',
        time: '17m',
        likes: '128',
        reply: 'Reply',
        likebtn: <AiOutlineHeart />,
    },
    {
        id: 3,
        img: '/girl3.webp',
        profilename: 'Michelle123',
        comment: 'michelle123',
        time: '17m',
        likes: '128',
        reply: 'Reply',
        likebtn: <AiOutlineHeart />,
    },
    {
        id: 4,
        img: '/kalo.webp',
        profilename: 'Lupin',
        comment: 'lupin123',
        time: '17m',
        likes: '128',
        reply: 'Reply',
        likebtn: <AiOutlineHeart />,
    },
    {
        id: 5,
        img: '/girl4.jpeg',
        profilename: 'Charlotte',
        comment: 'charlotte123',
        time: '17m',
        likes: '128',
        reply: 'Reply',
        likebtn: <AiOutlineHeart />,
    },
    {
        id: 6,
        img: '/mangta.jpeg',
        profilename: 'Paul',
        comment: 'paul123',
        time: '17m',
        likes: '128',
        reply: 'Reply',
        likebtn: <AiOutlineHeart />,
    },
    {
        id: 7,
        img: '/girl5.webp',
        profilename: 'Mia_Khalifa',
        comment: 'miakhalfa123',
        time: '17m',
        likes: '128',
        reply: 'Reply',
        likebtn: <AiOutlineHeart />,
    },
    {
        id: 8,
        img: '/girl6.webp',
        profilename: 'cherie Devellie',
        comment: 'cheredevellie123',
        time: '17m',
        likes: '128',
        reply: 'Reply',
        likebtn: <AiOutlineHeart />,
    },
]


const menuData = [
    {
        text: 'Delete',
    },
    {
        text: 'Edite',
    },
    {
        text: 'Hide Like Count',
    },
    {
        text: 'Turn off commenting',
    },
    {
        text: 'Go to post',
    },
    {
        text: 'Hare to..',
    },
    {
        text: 'Copy link',
    },
    {
        text: 'Embed',
    },
    {
        text: 'About this account',
    },
];


const postData = [
    {
        img: '/girl3.webp',
        likes: 468,
        comments: 56
    },
    {
        img: '/girl3.webp',
        likes: 468,
        comments: 56
    },
    {
        img: '/girl3.webp',
        likes: 468,
        comments: 56
    },
    {
        img: '/girl3.webp',
        likes: 468,
        comments: 56
    },
    {
        img: '/girl3.webp',
        likes: 468,
        comments: 56
    },
    {
        img: '/girl3.webp',
        likes: 468,
        comments: 56
    },
    {
        img: '/girl3.webp',
        likes: 468,
        comments: 56
    },
    {
        img: '/girl3.webp',
        likes: 468,
        comments: 56
    },
    {
        img: '/girl3.webp',
        likes: 468,
        comments: 56
    },
    {
        img: '/girl3.webp',
        likes: 468,
        comments: 56
    },
    {
        img: '/girl3.webp',
        likes: 468,
        comments: 56
    },
    {
        img: '/girl3.webp',
        likes: 468,
        comments: 56
    },
    {
        img: '/girl3.webp',
        likes: 468,
        comments: 56
    },
    {
        img: '/girl3.webp',
        likes: 468,
        comments: 56
    },
    {
        img: '/girl3.webp',
        likes: 468,
        comments: 56
    },
    {
        img: '/girl3.webp',
        likes: 468,
        comments: 56
    },
    {
        img: '/girl3.webp',
        likes: 468,
        comments: 56
    },
    {
        img: '/girl3.webp',
        likes: 468,
        comments: 56
    },
    {
        img: '/girl3.webp',
        likes: 468,
        comments: 56
    },
    {
        img: '/girl3.webp',
        likes: 468,
        comments: 56
    },
    {
        img: '/girl3.webp',
        likes: 468,
        comments: 56
    },
    {
        img: '/girl3.webp',
        likes: 468,
        comments: 56
    },
    {
        img: '/girl3.webp',
        likes: 468,
        comments: 56
    },
    {
        img: '/girl3.webp',
        likes: 468,
        comments: 56
    },
    {
        img: '/girl3.webp',
        likes: 468,
        comments: 56
    },
    {
        img: '/girl3.webp',
        likes: 468,
        comments: 56
    },
    {
        img: '/girl3.webp',
        likes: 468,
        comments: 56
    },
    {
        img: '/girl3.webp',
        likes: 468,
        comments: 56
    },
    {
        img: '/girl3.webp',
        likes: 468,
        comments: 56
    },
    {
        img: '/girl3.webp',
        likes: 468,
        comments: 56
    },
    {
        img: '/girl3.webp',
        likes: 468,
        comments: 56
    },
]