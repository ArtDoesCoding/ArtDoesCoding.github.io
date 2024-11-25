// src/components/Footer.js
import React from 'react';
import { FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Calvert Fitzgerald</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a
                        href="https://github.com/ArtDoesCoding"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="h-6 w-6" />
                    </a>
                    {/* Add other social media icons if desired */}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
