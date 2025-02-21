import React from 'react';
import Card from './Card';
import profileData from '../data/profileData'; // Import the structured data

const ProfileCards = () => {
    return (
        <div className="p-6 bg-gray-900 text-white min-h-screen">
            <div className="max-w-4xl mx-auto space-y-6">
                {/* Professional Summary Card */}
                <Card title={profileData.summary.title}>
                    <p>{profileData.summary.description}</p>
                </Card>

                {/* Technical Skills Card */}
                <Card title={profileData.techSkills.title}>
                    {profileData.techSkills.skills.map((skill, index) => (
                        <div key={index} className="mb-2">
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
                </Card>

                {/* Work Experience Card */}
                <Card title={profileData.experience.title}>
                    {profileData.experience.jobs.map((job, index) => (
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
                </Card>

                {/* Projects Card */}
                <Card title={profileData.projects.title}>
                    {profileData.projects.list.map((project, index) => (
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
                </Card>

                {/* Education Card */}
                <Card title={profileData.education.title}>
                    <h3 className="text-lg font-semibold">
                        {profileData.education.degree}
                    </h3>
                    <p className="text-gray-400">
                        {profileData.education.school} |{' '}
                        {profileData.education.graduation}
                    </p>
                    <ul className="list-disc list-inside text-gray-300">
                        {profileData.education.highlights.map(
                            (highlight, i) => (
                                <li key={i}>{highlight}</li>
                            )
                        )}
                    </ul>
                </Card>
            </div>
        </div>
    );
};

export default ProfileCards;
