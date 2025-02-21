import React from 'react';
import profileData from '@/data/profileData';

const ProfileSection = ({ section }) => {
    const data = profileData[section]; // Get the requested section dynamically

    if (!data) {
        return <p className="text-red-500">Invalid section: {section}</p>;
    }

    return (
        <div className="p-6 bg-gray-800 text-white rounded-lg shadow-lg max-w-3xl mx-auto">
            <h2 className="text-xl font-bold border-b border-gray-600 pb-2 mb-4">
                {data.title}
            </h2>

            {/* Handle different sections dynamically */}
            {section === 'techSkills' && (
                <div>
                    {data.skills.map((skill, index) => (
                        <div key={index} className="mb-4">
                            <h3 className="text-lg font-semibold">
                                {skill.category}
                            </h3>
                            <ul className="list-disc list-inside text-gray-300">
                                {skill.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}

            {section === 'summary' && <p>{data.description}</p>}

            {section === 'experience' && (
                <div>
                    {data.jobs.map((job, index) => (
                        <div
                            key={index}
                            className="mb-4 border-b border-gray-700 pb-4"
                        >
                            <h3 className="text-lg font-semibold">
                                {job.role} - {job.company}
                            </h3>
                            <p className="text-gray-400 text-sm">
                                {job.location} | {job.period}
                            </p>
                            <ul className="list-disc list-inside text-gray-300">
                                {job.responsibilities.map((resp, i) => (
                                    <li key={i}>{resp}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}

            {section === 'projects' && (
                <div>
                    {data.list.map((project, index) => (
                        <div
                            key={index}
                            className="mb-4 border-b border-gray-700 pb-4"
                        >
                            <h3 className="text-lg font-semibold">
                                {project.name}
                            </h3>
                            <ul className="list-disc list-inside text-gray-300">
                                {project.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}

            {section === 'education' && (
                <div>
                    <h3 className="text-lg font-semibold">{data.degree}</h3>
                    <p className="text-gray-400">
                        {data.school} | {data.graduation}
                    </p>
                    <ul className="list-disc list-inside text-gray-300">
                        {data.highlights.map((highlight, i) => (
                            <li key={i}>{highlight}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ProfileSection;
