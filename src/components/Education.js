import React from 'react';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

const educationItems = [
    {
        institution: 'James Madison University',
        location: 'Harrisonburg, Virginia',
        degree: 'B.S. Computer Science',
        minor: 'Science, Technology, and Society',
        graduation: 'May 2024',
    },
    {
        institution: 'Blue Ridge Community College',
        location: 'Weyers Cave, Virginia',
        degree: 'A.S. Computer Science',
        graduation: 'May 2022',
    },
];

const Education = () => (
    <section id="education" className="py-20 bg-gray-50 scroll-mt-24" data-aos="fade-up">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center text-indigo-600">Education</h2>
            <div className="max-w-4xl mx-auto space-y-8">
                {educationItems.map((item, index) => (
                    <article
                        key={index}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-indigo-50 rounded-lg">
                                <AcademicCapIcon className="h-6 w-6 text-indigo-600" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-800">
                                    {item.institution}
                                </h3>
                                <p className="text-gray-600">{item.location}</p>
                            </div>
                        </div>
                        <div className="space-y-2 pl-12">
                            <p className="text-gray-700">
                                <span className="font-medium">Degree:</span> {item.degree}
                            </p>
                            {item.minor && (
                                <p className="text-gray-700">
                                    <span className="font-medium">Minor:</span> {item.minor}
                                </p>
                            )}
                            <p className="text-sm text-gray-500">Graduated: {item.graduation}</p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </section>
);

export default Education;
