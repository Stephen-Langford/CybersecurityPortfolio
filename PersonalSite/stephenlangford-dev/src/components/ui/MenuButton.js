'use client';
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';

const MenuButton = ({ displayText }) => {
    const [borderColorTL, setBorderColorTL] = useState('white');
    const [borderColorRB, setBorderColorRB] = useState('gray-500');

    const handleMouseDown = () => {
        setBorderColorTL('gray-500');
        setBorderColorRB('white');
    };
    const handleMouseUp = () => {
        setBorderColorTL('white');
        setBorderColorRB('gray-500');
    };

    return (
        <button
            className={clsx(
                'float-left w-16 m-0 px-1.5 py-0 bg-menu-gray border-2 text-black font-normal flex flex-row items-center transition duration-75 active:scale-95 active:translate-y-px',
                `border-t-${borderColorTL} border-l-${borderColorTL} border-r-${borderColorRB} border-b-${borderColorRB}`
            )}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >
            <Image
                src="/icons/windows-4.png"
                alt="Windows Icon"
                width={16}
                height={16}
                className="flex-shrink-0 object-contain w-[16px] h-[16px]"
            />
            <span className="font-bold pl pr-0.5">{displayText}</span>
        </button>
    );
};

export default MenuButton;
