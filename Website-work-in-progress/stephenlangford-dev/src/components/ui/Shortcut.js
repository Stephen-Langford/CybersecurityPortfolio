import React from 'react';
import { useState } from 'react';
import Image from 'next/image';

const Shortcut = ({
    iconRef = '/icons/directory_closed-4.png',
    shortcutText = 'placeholder',
    onClick,
}) => {
    const [isDisabled, setIsDisabled] = useState(false);

    const handleClick = () => {
        if (isDisabled) return; // Prevent rapid clicking
        setIsDisabled(true); // Disable further clicks temporarily

        onClick(); // Call the original click function

        setTimeout(() => {
            setIsDisabled(false); // Re-enable clicking after delay
        }, 500); // Adjust delay as needed
    };

    return (
        <button
            className="flex flex-col items-center"
            onClick={handleClick}
            disabled={isDisabled} // Optional: Disable button visually
        >
            <Image src={iconRef} height={32} width={32} alt="Shortcut" />
            <span className="font-normal">{shortcutText}</span>
        </button>
    );
};

export default Shortcut;
