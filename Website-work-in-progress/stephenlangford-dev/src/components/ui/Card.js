import React from 'react';

// Reusable Card Component
const Card = ({ title, children }) => {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold border-b border-gray-600 pb-2 mb-4">
                {title}
            </h2>
            {children}
        </div>
    );
};

export default Card;
