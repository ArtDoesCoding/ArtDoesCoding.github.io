// src/components/Education.js
import React from 'react';

function Education() {
    return (
        <section id="education" className="bg-gray-50 py-12">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Education</h2>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800">
                        James Madison University, Harrisonburg, Virginia
                    </h3>
                    <p className="italic text-gray-600">Graduated: May 2024</p>
                    <p className="text-gray-700">B.S. Computer Science</p>
                    <p className="text-gray-700">Minor: Science, Technology, and Society</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                        Blue Ridge Community College, Weyers Cave, Virginia
                    </h3>
                    <p className="italic text-gray-600">Graduated: May 2022</p>
                    <p className="text-gray-700">A.S. Computer Science</p>
                </div>
            </div>
        </section>
    );
}

export default Education;
