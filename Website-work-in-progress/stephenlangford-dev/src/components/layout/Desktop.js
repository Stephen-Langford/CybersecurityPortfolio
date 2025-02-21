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

    return (
        <div className="">
            <div className="shortcut-container p-1 text-sm">
                <Shortcut
                    className="summary-shortcut"
                    iconRef="/icons/computer-4.png"
                    shortcutText="Summary"
                    onClick={() => setDisplaySummary(!displaySummary)}
                />
            </div>
            <div className="window-container">
                {displaySummary && <Window section="summary" />}
                {displayTechSkills && <Window section="techSkills" />}
                {displayExperience && <Window section="experience" />}
                {displayProjects && <Window section="projects" />}
                {displayEducation && <Window section="education" />}
            </div>
        </div>
    );
};

export default Desktop;
