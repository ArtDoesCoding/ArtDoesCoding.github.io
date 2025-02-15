import React from 'react';
import { BriefcaseIcon } from '@heroicons/react/24/outline';

const experiences = [
    {
        title: 'Full Stack Software Developer',
        company: 'Chameleon Technology Partners, Inc.',
        duration: 'November 2024 – Present',
        responsibilities: [
            'Developed e-commerce and learning management functionalities',
            'Integrated systems and tools to improve user experience',
            'Documented processes for maintainability'
        ]
    },
    {
        title: 'IT Intern',
        company: 'Kendal at Lexington',
        duration: 'September 2018 – April 2020',
        responsibilities: [
            'Assisted in IT support tasks and troubleshooting',
            'Provided technical support and resolved end-user issues',
            'Collaborated with team members on daily operations'
        ]
    }
];

const Experience = () => (
    <section id="experience" className="bg-gradient-to-br from-gray-50 to-gray-100 antialiased">
        <div className="container mx-auto px-6 py-16">
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Professional Experience
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
                {experiences.map((exp, index) => (
                    <article
                        key={index}
                        className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-2 bg-blue-50 rounded-lg">
                                <BriefcaseIcon className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                                <p className="text-gray-600">{exp.company}</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">{exp.duration}</p>
                        <ul className="space-y-2 pl-2">
                            {exp.responsibilities.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="text-gray-700 pl-4 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-600 before:rounded-full"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </div>
    </section>
);

Experience.propTypes = {};

export default Experience;
