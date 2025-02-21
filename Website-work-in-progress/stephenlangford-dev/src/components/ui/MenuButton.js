import React from 'react';
import Image from 'next/image';

const MenuButton = (props) => {
    const displayText = props.displayText;

    return (
        <div className="float-left  mr-1.5 align-middle inline-block  px-1.5 bg-menu-gray border border-t-white border-l-white border-r-gray-500 border-b-gray-500  w-59px text-black font-normal shadow-black shadow">
            <span className="w-11 h-3.5 font-bold">
                <Image
                    src="/icons/windows-4.png"
                    alt="Windows Icon"
                    width={15} // Adjust size as needed
                    height={15} // Ensures proper aspect ratio
                    className=" object-contain inline-block pr-0.5"
                />
                {displayText}
            </span>
        </div>
    );
};

export default MenuButton;
