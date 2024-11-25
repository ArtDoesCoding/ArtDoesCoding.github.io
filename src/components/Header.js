// src/components/Header.js
import React from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { FaGithub } from 'react-icons/fa';

function Header() {
    return (
        <header id="top" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <div className="container mx-auto flex flex-col items-center justify-center py-20 px-6">
                <h1 className="text-5xl font-extrabold mb-4">Calvert Fitzgerald</h1>
                <p className="text-xl mb-6">Software Engineer | Full Stack Developer</p>
                <div className="flex space-x-4">
                    <a
                        href="mailto:calfitzgerald3@yahoo.com"
                        className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200 flex items-center"
                    >
                        <EnvelopeIcon className="h-5 w-5 mr-2" />
                        Email Me
                    </a>
                    <a
                        href="https://github.com/ArtDoesCoding"
                        className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200 flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="h-5 w-5 mr-2" />
                        GitHub
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;
