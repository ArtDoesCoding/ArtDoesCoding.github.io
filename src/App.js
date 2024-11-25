// src/App.js
import React from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Summary from './components/Summary';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <NavBar />
            <Header />
            <main>
                <Summary />
                <Education />
                <Skills />
                <Experience />
                <Projects />
            </main>
            <Footer />
        </div>
    );
}

export default App;
