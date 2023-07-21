import React, { useState } from 'react'
import Sidebar from '../Home/Sidebar'
import Profiles from './Profiles'
import Messages from './Messages'
import InChat from './InChat'

const Index = () => {

    const [selectedProfile, setSelectedProfile] = useState(null);

    const handleProfileClick = (profile: any) => {
        setSelectedProfile(profile);
    };

    return (
        <div className='flex'>
            <Sidebar />
            <Profiles onProfileClick={handleProfileClick} />
            {selectedProfile ? (
                <InChat profile={selectedProfile} />
            ) : (
                <Messages />
            )}
        </div>
    );
};

export default Index;