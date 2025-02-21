import React from 'react';
import ProfileSection from './ProfileSection';
import profileData from '@/data/profileData';

const Window = ({ section }) => {
    const windowHeader = profileData[section].title;

    return (
        <div className="window-container relative mx-auto my-0 pt-2.5 px-5 pb-10 max-w-full h-full z-10">
            <div className="window font-normal tracking-wide bg-window-background border-2 border-t-window-border-light border-l-window-border-light border-r-black border-b-black h-full relative my-0 mx-auto">
                <header className="bg-window-top-blue h-6 border-y border-menu-gray border-l border-r-2 py-1 pl-3 align-middle font-bold">
                    <span className="text-wrapper ">{windowHeader}</span>
                </header>
                <div className="window-contents p-1">
                    <ProfileSection section={section} />
                </div>
            </div>
        </div>
    );
};

export default Window;
