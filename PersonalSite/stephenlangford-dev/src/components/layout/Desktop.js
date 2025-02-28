"use client";
import React, { useState } from "react";
import Shortcut from "../ui/Shortcut";
import Window from "../ui/Window";
import sections from "@/data/sections.js"

const Desktop = () => {
    // Initialize state dynamically for all sections
    const [openWindows, setOpenWindows] = useState({});

    // Toggle function for windows
    const toggleWindow = (section) => {
        setOpenWindows((prev) => ({
            ...prev,
            [section]: !prev[section], // Toggle state dynamically
        }));
    };

    return (
        <div className="relative h-screen w-screen">
            {/* Shortcut Container */}
            <div className="shortcut-container grid grid-cols-1 gap-4 p-4 z-10 justify-end absolute right-0">
                {sections.map(({ key, icon, text }) => (
                    <Shortcut key={key} iconRef={icon} shortcutText={text} onClick={() => toggleWindow(key)} />
                ))}
            </div>

            {/* Window Container */}
            <div className="window-container absolute top-0 left-0 z-50 flex flex-row">
                {sections.map(({ key }) =>
                    openWindows[key] ? (
                        <Window
                            key={key}
                            section={key}
                            onClose={() => toggleWindow(key)}
                            onHelp={() => toggleWindow("contact")}
                        />
                    ) : null
                )}
            </div>
        </div>
    );
};

export default Desktop;
