'use client';
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';

const WindowButton = ({ iconRef = '/icons/close-icon.png' }) => {
    const [borderColorTL, setBorderColorTL] = useState('gray-300');
    const [borderColorRB, setBorderColorRB] = useState('gray-700');

    const handleMouseDown = () => {
        setBorderColorRB('gray-300');
        setBorderColorTL('gray-700');
    };
    const handleMouseUp = () => {
        setBorderColorRB('gray-700');
        setBorderColorTL('gray-300');
    };
    return (
        <button
            className={clsx(
                'window-button float-right bg-menu-gray z-20 border-2 active:translate-y-px active:scale-95',
                {
                    'border-t-gray-300 border-l-gray-300':
                        borderColorTL === 'gray-300',
                    'border-t-gray-700 border-l-gray-700':
                        borderColorTL === 'gray-700',
                    'border-r-gray-700 border-b-gray-700':
                        borderColorRB === 'gray-700',
                    'border-r-gray-300 border-b-gray-300':
                        borderColorRB === 'gray-300',
                }
            )}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >
            <Image src={iconRef} width={10} height={11} alt="Window Button" />
        </button>
    );
};

export default WindowButton;
