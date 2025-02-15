import React from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { FaGithub } from 'react-icons/fa';

const Header = () => (
    <header id="top" className="pt-32 pb-24 relative animated-gradient" data-aos="fade-in">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-6 relative">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
                    Calvert Fitzgerald
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8 drop-shadow-lg">
                    Building Digital Experiences with Precision &amp; Passion
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="mailto:calvertf@acm.org"
                        className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                        aria-label="Contact Me"
                    >
                        <EnvelopeIcon className="h-5 w-5" />
                        Contact Me
                    </a>
                    <a
                        href="https://github.com/ArtDoesCoding"
                        className="bg-gray-800 text-white px-8 py-4 rounded-xl hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit my GitHub profile"
                    >
                        <FaGithub className="h-5 w-5" />
                        GitHub Profile
                    </a>
                </div>
            </div>
        </div>
    </header>
);

export default Header;
