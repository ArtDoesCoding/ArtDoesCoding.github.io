import React from 'react';
import { CpuChipIcon, WindowIcon, ServerStackIcon } from '@heroicons/react/24/outline';

const skills = [
    {
        category: 'Programming Languages',
        icon: <CpuChipIcon className="h-8 w-8" />,
        items: ['Java', 'C', 'JavaScript', 'HTML', 'Ruby', 'Python'],
    },
    {
        category: 'Tools & Frameworks',
        icon: <WindowIcon className="h-8 w-8" />,
        items: ['Flask', 'SQLAlchemy', 'Tkinter', 'ttkbootstrap', 'Matplotlib', 'React'],
    },
    {
        category: 'Databases',
        icon: <ServerStackIcon className="h-8 w-8" />,
        items: ['SQLite', 'MySQL', 'MariaDB'],
    },
];

const Skills = () => (
    <section id="skills" className="py-20 bg-white scroll-mt-24" data-aos="fade-up">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center text-indigo-600">
                Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {skills.map((skill) => (
                    <article
                        key={skill.category}
                        className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-indigo-300 transition-colors"
                    >
                        <div className="flex justify-center mb-6">
                            <div className="p-4 bg-white rounded-full shadow-sm">
                                {React.cloneElement(skill.icon, { className: 'h-8 w-8 text-indigo-600' })}
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-center mb-6 text-gray-800">
                            {skill.category}
                        </h3>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {skill.items.map((item) => (
                                <span
                                    key={item}
                                    className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </section>
);

export default Skills;
