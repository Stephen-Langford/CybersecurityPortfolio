'use client';
import React from 'react';
import Shortcut from '../ui/Shortcut';
import Window from '../ui/Window';
import { useState } from 'react';

const Desktop = () => {
    const [displaySummary, setDisplaySummary] = useState(false);
    const [displayTechSkills, setDisplayTechSkills] = useState(false);
    const [displayExperience, setDisplayExperience] = useState(false);
    const [displayProjects, setDisplayProjects] = useState(false);
    const [displayEducation, setDisplayEducation] = useState(false);
    const [displayContact, setDisplayContact] = useState(false);

    return (
        <div className="relative h-screen w-screen">
            {/* Shortcut Container - Uses Grid for Alignment */}
            <div className="shortcut-container grid grid-cols-1 gap-4 p-4 z-10 relative">
                <Shortcut
                    iconRef="/icons/notepad-5.png"
                    shortcutText="Summary"
                    onClick={() => setDisplaySummary(!displaySummary)}
                />
                <Shortcut
                    iconRef="/icons/tech.png"
                    shortcutText="Technical Skills"
                    onClick={() => setDisplayTechSkills(!displayTechSkills)}
                />
                <Shortcut
                    iconRef="/icons/computer-4.png"
                    shortcutText="Work Experience"
                    onClick={() => setDisplayExperience(!displayExperience)}
                />
                <Shortcut
                    iconRef="/icons/directory_closed-4.png"
                    shortcutText="Projects"
                    onClick={() => setDisplayProjects(!displayProjects)}
                />
                <Shortcut
                    iconRef="/icons/help_book_cool-4.png"
                    shortcutText="Education"
                    onClick={() => setDisplayEducation(!displayEducation)}
                />
                <Shortcut
                    iconRef="/icons/envelope_closed-0.png"
                    shortcutText="Contact Me"
                    onClick={() => setDisplayContact(!displayContact)}
                />
            </div>

            <div className="window-container absolute top-0 left-0 z-50 flex flex-row">
                {displaySummary && (
                    <Window
                        section="summary"
                        onClose={() => setDisplaySummary(false)}
                    />
                )}
                {displayTechSkills && (
                    <Window
                        section="techSkills"
                        onClose={() => setDisplayTechSkills(false)}
                    />
                )}
                {displayExperience && (
                    <Window
                        section="experience"
                        onClose={() => setDisplayExperience(false)}
                    />
                )}
                {displayProjects && (
                    <Window
                        section="projects"
                        onClose={() => setDisplayProjects(false)}
                    />
                )}
                {displayEducation && (
                    <Window
                        section="education"
                        onClose={() => setDisplayEducation(false)}
                    />
                )}
                {displayContact && (
                    <Window
                        section="contact"
                        onClose={() => setDisplayContact(false)}
                    />
                )}
            </div>
        </div>
    );
};

export default Desktop;
