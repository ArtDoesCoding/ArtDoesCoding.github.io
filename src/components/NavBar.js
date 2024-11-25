// src/components/NavBar.js
import React from 'react';
import {
    UserIcon,
    AcademicCapIcon,
    BriefcaseIcon,
    CodeBracketIcon,
} from '@heroicons/react/24/outline';

function NavBar() {
    return (
        <nav className="bg-white shadow sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="text-xl font-bold">
                    <a href="#top">CF</a>
                </div>
                <ul className="flex space-x-6">
                    <li>
                        <a href="#summary" className="flex items-center text-gray-600 hover:text-blue-600">
                            <UserIcon className="h-5 w-5 mr-1" />
                            Summary
                        </a>
                    </li>
                    <li>
                        <a href="#education" className="flex items-center text-gray-600 hover:text-blue-600">
                            <AcademicCapIcon className="h-5 w-5 mr-1" />
                            Education
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="flex items-center text-gray-600 hover:text-blue-600">
                            <CodeBracketIcon className="h-5 w-5 mr-1" />
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#experience" className="flex items-center text-gray-600 hover:text-blue-600">
                            <BriefcaseIcon className="h-5 w-5 mr-1" />
                            Experience
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="flex items-center text-gray-600 hover:text-blue-600">
                            <CodeBracketIcon className="h-5 w-5 mr-1" />
                            Projects
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
