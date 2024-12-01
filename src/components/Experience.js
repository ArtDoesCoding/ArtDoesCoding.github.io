// src/components/Experience.js
import React from 'react';
import { BriefcaseIcon } from '@heroicons/react/24/outline';
//test
function Experience() {
    const experiences = [
        {
            title: 'Full Stack Software Developer',
            company: 'Chameleon Technology Partners, Inc.',
            duration: 'November 2024 – Present',
            responsibilities: [
                'Developed e-commerce and learning management functionalities using WooCommerce, PHP, MariaDB, HTML, CSS, JavaScript, and Moodle.',
                'Integrated systems and tools to improve user experience and streamline backend processes.',
                'Documented processes to ensure clarity and maintainability.',
            ],
        },
        {
            title: 'IT Intern',
            company: 'Kendal at Lexington',
            duration: 'September 2018 – April 2020',
            responsibilities: [
                'Assisted in IT support tasks, troubleshooting technical issues, and providing end-user support.',
                'Provided technical support and resolved end-user issues to maintain daily operational continuity.',
                'Collaborated with team members to support daily operations and ensure smooth functionality of systems.',
            ],
        },
    ];

    return (
        <section id="experience" className="bg-gray-50 py-12">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Experience</h2>
                {experiences.map((exp, index) => (
                    <div className="mb-8" key={index}>
                        <div className="flex items-center mb-2">
                            <BriefcaseIcon className="h-6 w-6 text-blue-600 mr-2" />
                            <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                        </div>
                        <p className="italic text-gray-600">{exp.company}</p>
                        <p className="text-sm text-gray-600">{exp.duration}</p>
                        <ul className="list-disc list-inside text-gray-700 mt-2">
                            {exp.responsibilities.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;
