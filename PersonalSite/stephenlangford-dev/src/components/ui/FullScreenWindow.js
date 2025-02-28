'use client';
import React from 'react';
import Emulator from '@/components/games/Emulator';
import LinkButton from './LinkButton';

const FullScreenWindow = ({ section, onClose, onHelp }) => {
    const windowHeader = "Math Blaster Episode 1: The Search for Spot SNES";

    return (
        <div
            className={`window-container relative mx-auto my-0 pt-2.5 px-2.5 pb-2.5 h-screen w-screen`}
        >
            <div className="window font-normal tracking-wide bg-window-background border-2 border-t-window-border-light border-l-window-border-light border-r-black border-b-black h-full relative my-0 mx-auto flex flex-col">
                <header className="bg-window-top-blue h-6 border-y border-menu-gray border-l border-r-2 py-1 pl-3 align-middle flex items-center">
                    <span className="text-wrapper text-12px flex-grow">
                        {windowHeader}
                    </span>
                    <span className="window-button-wrapper pr-1 flex gap-1">
                        <LinkButton
                            buttonImageSrc ="/icons/close-icon.png"
                            buttonLink = "/"
                        />
                    </span>
                </header>
                <div
                    className={`window-contents p-0.5 flex-grow w-full h-full `}
                >
                    <Emulator />
                </div>
            </div>
        </div>
    );
};

export default FullScreenWindow;
