import React from 'react';
import Image from 'next/image';

const MenuButton = (props) => {
    const displayText = props.displayText;

    return (
        <div className="float-left m-0 align-middle  px-1.5 py-0 bg-menu-gray border border-t-white border-l-white border-r-gray-500 border-b-gray-500 w-59px text-black font-normal shadow-black shadow flex flex-row items-center">
            <Image
                src="/icons/windows-4.png"
                alt="Windows Icon"
                width={16} // Adjust size as needed
                height={16} // Ensures proper aspect ratio
                className=""
            />
            <span className="font-bold pl-0.5">{displayText}</span>
        </div>
    );
};

export default MenuButton;
