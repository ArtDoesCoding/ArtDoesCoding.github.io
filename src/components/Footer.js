import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => (
    <footer className="bg-gray-900 text-white py-12" data-aos="fade-in">
        <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-gray-400 mb-4">
                    © {new Date().getFullYear()} Calvert Fitzgerald. All rights reserved.
                </p>
                <div className="flex justify-center space-x-6">
                    <a
                        href="https://github.com/ArtDoesCoding"
                        className="text-gray-400 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit my GitHub profile"
                    >
                        <FaGithub className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
