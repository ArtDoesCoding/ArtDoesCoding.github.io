import React from 'react';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

const projects = [
    {
        name: 'Library Bookkeeping Application',
        duration: 'Completed: May 2024',
        description:
            'User-friendly application to manage library books with database integration',
        technologies: ['Python', 'Tkinter', 'SQLite'],
        link: '#',
        image: 'https://via.placeholder.com/300x200',
    },
    {
        name: 'To-Do List API Starter',
        duration: 'Completed: March 2024',
        description: 'REST API for todo list management using Flask',
        technologies: ['Flask', 'SQLAlchemy', 'Python'],
        link: '#',
        image: 'https://via.placeholder.com/300x200',
    },
    {
        name: 'Portfolio Website',
        duration: 'Completed: November 2024',
        description:
            'Personal portfolio built with React and Tailwind CSS',
        technologies: ['React', 'Tailwind CSS', 'GitHub Pages'],
        link: '#',
        image: 'https://via.placeholder.com/300x200',
    },
];

const Projects = () => (
    <section id="projects" className="py-20 bg-white scroll-mt-24" data-aos="fade-up">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center text-indigo-600">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <article
                        key={index}
                        className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-indigo-300 transition-colors group"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-white rounded-lg shadow-sm">
                                <CodeBracketIcon className="h-6 w-6 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">
                                {project.name}
                            </h3>
                        </div>
                        <p className="text-gray-600 mb-6">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                            aria-label={`View project: ${project.name}`}
                        >
                            View Project
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 ml-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                        </a>
                    </article>
                ))}
            </div>
        </div>
    </section>
);

export default Projects;
