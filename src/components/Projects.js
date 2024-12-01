// src/components/Projects.js
import React from 'react';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

function Projects() {
    const projects = [
        {
            name: 'Library Bookkeeping Application',
            duration: 'Completed: May 2024',
            description:
                'A user-friendly application designed to track and manage library books with database integration and a GUI component.',
            technologies: ['Python', 'Tkinter', 'SQLite'],
            link: 'https://github.com/ArtDoesCoding/LibraryBookKeepingApplication',
        },
        {
            name: 'To-Do List API Starter Project',
            duration: 'Completed: March 2024',
            description:
                'A REST API built with Flask to manage a to-do list application, utilizing SQLAlchemy for database interactions.',
            technologies: ['Flask', 'SQLAlchemy', 'Python'],
            link: 'https://github.com/ArtDoesCoding/Todo_Rest_API_Starter_Project',
        },
        {
            name: 'This Site!',
            duration: 'November 2024',
            description:
                'A personal portfolio website built with React, Tailwind CSS, and hosted on GitHub Pages to showcase my projects and skills.',
            technologies: ['React', 'Tailwind CSS', 'GitHub Pages'],
            link: 'https://github.com/ArtDoesCoding/ArtDoesCoding.github.io',
        }
    ];

    return (
        <section id="projects" className="bg-white py-12">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-200">
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
                            <a
                                href={project.link}
                                className="block mt-4 text-blue-600 hover:underline text-sm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View on GitHub
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
