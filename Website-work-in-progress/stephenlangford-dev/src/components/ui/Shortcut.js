import React from 'react';
import Window from './Window';
import Image from 'next/image';

const Shortcut = ({
    iconRef = '/icons/directory_closed-4.png',
    profileSection = 'summary',
}) => {
    const openWindow = (profileSection) => {};

    return (
        <div>
            <Image
                ref={iconRef}
                onClick={openWindow}
                height={32}
                width={32}
                alt="Shortcut"
            />
        </div>
    );
};

export default Shortcut;
