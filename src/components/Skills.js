// src/components/Skills.js
import React from 'react';
import { CpuChipIcon, WindowIcon, ServerStackIcon } from '@heroicons/react/24/outline';

function Skills() {
    const skills = [
        {
            category: 'Programming Languages',
            icon: <CpuChipIcon className="h-8 w-8 text-blue-600 mx-auto mb-2" />,
            items: ['Java', 'C', 'JavaScript', 'HTML', 'Ruby', 'Python'],
        },
        {
            category: 'Tools & Frameworks',
            icon: <WindowIcon className="h-8 w-8 text-blue-600 mx-auto mb-2" />,
            items: ['Flask', 'SQLAlchemy', 'Tkinter', 'ttkbootstrap', 'Matplotlib', 'React'],
        },
        {
            category: 'Databases',
            icon: <ServerStackIcon className="h-8 w-8 text-blue-600 mx-auto mb-2" />,
            items: ['SQLite', 'MySQL', 'MariaDB'],
        },
    ];

    return (
        <section id="skills" className="bg-white py-12">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Skills</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {skills.map((skill) => (
                        <div key={skill.category} className="text-center bg-white shadow-md border border-gray-200 p-4 rounded-lg">
                            {skill.icon}
                            <h3 className="font-semibold mb-2 text-gray-800">{skill.category}</h3>
                            <ul className="list-none text-gray-700">
                                {skill.items.map((item) => (
                                    <li key={item} className="mb-1">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
