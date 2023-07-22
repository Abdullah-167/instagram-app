import React, { useState } from 'react'
import Sidebar from '../Home/Sidebar'
import Profiles from './Profiles'
import Messages from './Messages'
import InChat from './InChat'

const Index = () => {

    const [showInChat, setShowInChat] = useState(null);


    const handleProfileClick = (profile: any) => {
        setShowInChat(profile);
    };

    return (
        <div className='flex'>
            <Sidebar />
            <Profiles onProfileClick={handleProfileClick} />
            {showInChat ? <InChat profile={showInChat} /> : <Messages />}
        </div>
    )
}

export default Index