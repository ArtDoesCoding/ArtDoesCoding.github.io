// src/components/Projects.js
import React from 'react';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

function Projects() {
    const projects = [
        {
            name: 'Personal Finance Tracker',
            duration: 'June 2024 - Present',
            description:
                'Developed with Python, SQLite, and Tkinter for tracking income, expenses, and generating financial reports. Designed a modern GUI with ttkbootstrap and integrated Matplotlib for data visualization.',
            technologies: ['Python', 'SQLite', 'Tkinter', 'Matplotlib'],
        },
        // Add more projects here
    ];

    return (
        <section id="projects" className="bg-white py-12">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                            <div className="flex items-center mb-2">
                                <CodeBracketIcon className="h-6 w-6 text-blue-600 mr-2" />
                                <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
                            </div>
                            <p className="text-sm text-gray-600">{project.duration}</p>
                            <p className="text-gray-700 mt-4">{project.description}</p>
                            <div className="flex flex-wrap space-x-2 mt-4">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                            {/* Add links to GitHub or live demo if available */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
