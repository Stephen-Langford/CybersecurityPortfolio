'use client'; // Only needed in Next.js 13+ (App Router)

import { useState, useEffect } from 'react';

export default function DateDisplay() {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const formattedTime = now.toLocaleString('en-US', {
                weekday: 'short', // Thu
                month: 'short', // Feb
                day: '2-digit', // 20
                hour: 'numeric', // 9
                minute: '2-digit', // 14
                hour12: true, // 9:14 PM format
            });

            setCurrentTime(formattedTime);
        };

        updateDateTime(); // Update immediately
        const interval = setInterval(updateDateTime, 1000); // Update every second

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <span className="border border-t-gray-500  border-l-gray-500  border-b border-r-white border-b-white font-vt323 text-black font-normal leading-5 h-6 align-middle px-2.5 float-right">
            {currentTime}
        </span>
    );
}
