import React, { useState } from 'react';
import {
    UserIcon,
    AcademicCapIcon,
    BriefcaseIcon,
    CodeBracketIcon,
    Bars3Icon,
    XMarkIcon
} from '@heroicons/react/24/outline';

const navItems = [
    { id: 'summary', icon: UserIcon, text: 'Summary' },
    { id: 'education', icon: AcademicCapIcon, text: 'Education' },
    { id: 'skills', icon: CodeBracketIcon, text: 'Skills' },
    { id: 'experience', icon: BriefcaseIcon, text: 'Experience' },
    { id: 'projects', icon: CodeBracketIcon, text: 'Projects' }
];

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center h-16">
                    <a
                        href="#top"
                        className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    >
                        CF
                    </a>
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    className="flex items-center text-gray-600 hover:text-blue-600 gap-2 transition-colors group"
                                >
                                    <item.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                                    <span className="font-medium">{item.text}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-gray-600 hover:text-blue-600"
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isMenuOpen ? (
                            <XMarkIcon className="h-6 w-6" />
                        ) : (
                            <Bars3Icon className="h-6 w-6" />
                        )}
                    </button>
                </div>
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-100">
                        <ul className="space-y-4">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={`#${item.id}`}
                                        className="flex items-center text-gray-600 hover:text-blue-600 gap-3 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <item.icon className="h-5 w-5" />
                                        <span>{item.text}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

NavBar.propTypes = {};

export default NavBar;
