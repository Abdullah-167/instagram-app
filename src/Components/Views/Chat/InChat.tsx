import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineVideoCamera } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { GrEmoji } from 'react-icons/gr';
import { GrMicrophone } from 'react-icons/gr';
import { FiImage } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';

const InChat = () => {
    const [message, setMessage] = useState('');
    const [sentMessages, setSentMessages] = useState([]);
    const [recording, setRecording] = useState(false);
    const recorderRef = useRef(null);

    const handleMessage = (e) => {
        setMessage(e.target.value);
    };

    const handleSendMessage = () => {
        if (message.trim() !== '') {
            setSentMessages((prevMessages) => [...prevMessages, { message }]);
            setMessage('');
        }
    };

    const handleKeyDown = (e) => {
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

                const chunks = [];
                mediaRecorder.addEventListener('dataavailable', (event) => {
                    if (event.data.size > 0) {
                        chunks.push(event.data);
                    }
                });

                mediaRecorder.addEventListener('stop', () => {
                    const recordedBlob = new Blob(chunks, { type: 'audio/webm' });
                    setSentMessages((prevMessages) => [...prevMessages, { audio: recordedBlob }]);
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

    return (
        <div className='w-full'>
            <div className='flex justify-between items-center py-4 px-6 border-b border-b-gray-300'>
                <div className='flex justify-between items-center cursor-pointer'>
                    <div className='flex gap-3 items-center'>
                        <div>
                            <Image className='rounded-full' src={'/padhana.jpg'} alt={'Padhana'} width={50} height={50} />
                        </div>
                        <div>
                            <h3 className='text-[16px] pt-1 font-semibold'>oy_itx_padhana</h3>
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
            <div className='min-h-[400px] max-h-[400px] overflow-auto my-4'>
                {sentMessages.length === 0 ? (
                    <p>No messages found.</p>
                ) : (
                    sentMessages.map((msg, index) => (
                        <div key={index}>
                            {msg.message && <p>{msg.message}</p>}
                            {msg.audio && (
                                <div>
                                    <audio src={URL.createObjectURL(msg.audio)} controls />
                                </div>
                            )}
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
