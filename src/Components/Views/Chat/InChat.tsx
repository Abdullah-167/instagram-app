import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineVideoCamera } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { GrEmoji } from 'react-icons/gr';
import { GrMicrophone } from 'react-icons/gr';
import { FiImage } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';

interface Message {
    message: string;
    // Add other message properties here (e.g., audio, image, etc.)
}

interface Profile {
    name: string;
    img: string;
    // Add other profile properties here if needed
}

interface InChatProps {
    profile: Profile;
}

const InChat: React.FC<InChatProps> = ({ profile }) => {
    const [message, setMessage] = useState('');
    const [messageHistory, setMessageHistory] = useState<{ [key: string]: Message[] }>({
        [profile.name]: [],
    });
    const [recording, setRecording] = useState(false);
    const recorderRef = useRef<MediaRecorder | null>(null);

    const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    };

    const handleSendMessage = () => {
        if (message.trim() !== '') {
            setMessageHistory((prevHistory) => ({
                ...prevHistory,
                [profile.name]: [...(prevHistory[profile.name] || []), { message }],
            }));
            setMessage('');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const handleMicrophoneClick = () => {
        if (!recording) {
            // Start recording
            navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
                const mediaRecorder = new MediaRecorder(stream);
                recorderRef.current = mediaRecorder;

                const chunks: Blob[] = [];
                mediaRecorder.addEventListener('dataavailable', (event) => {
                    if (event.data.size > 0) {
                        chunks.push(event.data);
                    }
                });

                mediaRecorder.addEventListener('stop', () => {
                    const recordedBlob = new Blob(chunks, { type: 'audio/webm' });
                    // Handle the recorded audio blob (e.g., save or send it)
                    chunks.length = 0; // Clear the chunks array
                    setRecording(false);
                });

                mediaRecorder.start();
                setRecording(true);
            })
                .catch((error) => {
                    console.error('Error accessing microphone:', error);
                });
        } else {
            // Stop recording
            const mediaRecorder = recorderRef.current;
            if (mediaRecorder && mediaRecorder.state !== 'inactive') {
                mediaRecorder.stop();
            }
        }
    };

    const messageContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Function to scroll to the bottom of the container
        const scrollToBottom = () => {
            if (messageContainerRef.current) {
                messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
            }
        };
        scrollToBottom();
    }, [messageHistory, profile.name]);


    return (
        <div className='w-full'>
            <div className='flex justify-between items-center py-4 px-6 border-b border-b-gray-300'>
                <div className='flex justify-between items-center cursor-pointer'>
                    <div className='flex gap-3 items-center'>
                        <div>
                            <Image className='rounded-full object-cover max-w-[50px] min-w-[50px] max-h-[50px] min-h-[50px]' src={profile.img} alt={'Padhana'} width={50} height={50} />
                        </div>
                        <div>
                            <h3 className='text-[16px] pt-1 font-semibold'>{profile.name}</h3>
                        </div>
                    </div>
                </div>
                <div className='flex gap-5 text-2xl items-center'>
                    <span className='cursor-pointer' onClick={handleMicrophoneClick}>
                        <BsTelephone />
                    </span>
                    <span className='text-3xl'>
                        <AiOutlineVideoCamera />
                    </span>
                    <span className=' cursor-pointer'>
                        <BsInfoCircle />
                    </span>
                </div>
            </div>
            <div className='min-h-[400px] max-h-[400px] overflow-auto my-4' ref={messageContainerRef}>
                {messageHistory[profile.name]?.length === 0 ? (
                    <p>No messages found.</p>
                ) : (
                    messageHistory[profile.name]?.map((msg, index) => (
                        <div key={index}>
                            {msg.message && <p>{msg.message}</p>}
                            {/* (rest of the message display logic) */}
                        </div>
                    ))
                )}
            </div>
            <div className='flex flex-col justify-end'>
                <div className='border flex items-center border-gray-300 rounded-full mx-3 px-4 py-1'>
                    <div className='flex gap-2 w-full items-center'>
                        <span className='text-3xl cursor-pointer'><GrEmoji /></span>
                        <input
                            className='outline-none w-full'
                            onChange={handleMessage}
                            value={message}
                            onKeyDown={handleKeyDown}
                            type='text'
                            placeholder='Message...'
                        />
                    </div>
                    {!message && (
                        <div className='flex items-center gap-3 text-2xl'>
                            <span className='cursor-pointer' onClick={handleMicrophoneClick}>
                                {recording ? <span className='text-sm'>Stop</span> : <GrMicrophone />}
                            </span>
                            <span className='cursor-pointer'>
                                <FiImage />
                            </span>
                            <span className='cursor-pointer'>
                                <AiOutlineHeart />
                            </span>
                        </div>
                    )}
                    {message && (
                        <p
                            className='text-lg text-[#5a9ef7] px-5 rounded-lg font-semibold cursor-pointer'
                            onClick={handleSendMessage}
                        >
                            Send
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InChat;
