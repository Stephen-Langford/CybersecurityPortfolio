'use client';
import React from 'react';
import ProfileSection from './ProfileSection';
import profileData from '@/data/profileData';
import WindowButton from './WindowButton';

const Window = ({ section, onClose, onHelp }) => {
    const windowHeader = profileData[section].title;

    const windowHeight =
        section === 'education' || section === 'contact'
            ? 'h-full'
            : 'h-[500px]';

    const contentsHeight =
        section === 'education' || section === 'contact' || section === 'mathblaster'
            ? 'h-full'
            : 'h-[400px]';

    return (
        <div
            className={`window-container relative mx-auto my-0 pt-2.5 px-5 pb-10 max-w-lg ${windowHeight}`}
        >
            <div className="window font-normal tracking-wide bg-window-background border-2 border-t-window-border-light border-l-window-border-light border-r-black border-b-black h-full relative my-0 mx-auto flex flex-col">
                <header className="bg-window-top-blue h-6 border-y border-menu-gray border-l border-r-2 py-1 pl-3 align-middle flex items-center">
                    <span className="text-wrapper text-12px flex-grow">
                        {windowHeader}
                    </span>
                    <span className="window-button-wrapper pr-1 flex gap-1">
                        {section !== 'contact' && (
                            <WindowButton
                                iconRef="/icons/question-icon.png"
                                onClick={onHelp}
                            />
                        )}
                        <WindowButton
                            iconRef="/icons/close-icon.png"
                            onClick={onClose}
                        />
                    </span>
                </header>
                <div
                    className={`window-contents p-0.5 overflow-y-auto flex-grow ${contentsHeight}`}
                >
                    <ProfileSection section={section} />
                </div>
            </div>
        </div>
    );
};

export default Window;
