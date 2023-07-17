import React, { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';

const Searchbar = ({ openSearch }: any) => {
    const [searchText, setSearchText] = useState('');

    const handleClearSearch = () => {
        setSearchText('');
    };

    return (
        <div
            className={`-z-10 absolute top-0 left-[81px] transition-all sidebar-search duration-700 delay-300 w-96 bg-white rounded-xl ${openSearch ? 'translate-x-0 z-[999]' : '-translate-x-[500px]'
                }`}
            style={{ height: '100vh' }}
        >
            <p className="text-[24px] font-semibold py-6 px-3.5">Search</p>
            <div className="relative border-b border-b-gray-200 pb-7 px-3.5 mb-3">
                {!searchText && (
                    <span className="absolute inset-y-0 left-3 -top-6 pl-3 flex items-center pointer-events-none">
                        <BiSearch className="text-2xl text-gray-400 font-bold" />
                    </span>
                )}
                <input
                    className={`w-full bg-[#efefef] py-2 rounded-lg  ${searchText ? 'pl-6' : 'pl-10'} pr-4 outline-none`}
                    type="text"
                    placeholder="Search..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                {searchText && (
                    <span
                        className="absolute inset-y-0 right-5 -top-7 pr-3 flex items-center cursor-pointer"
                        onClick={handleClearSearch}
                    >
                        <FaTimes className=" text-white text-xs p-0.5  bg-gray-400 rounded-full" />
                    </span>
                )}
            </div>
            <span className="text-[16px] font-semibold pb-20 px-3.5 block">Recent</span>
            <p className="text-sm text-center px-3.5 text-gray-500 font-semibold">No recent searches</p>
        </div>
    );
};

export default Searchbar;
