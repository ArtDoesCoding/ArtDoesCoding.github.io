import React from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Summary from './components/Summary';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => (
    <div className="min-h-screen">
        <NavBar />
        <Header />
        <main className="space-y-28">
            <Summary />
            <Education />
            <Skills />
            <Experience />
            <Projects />
        </main>
        <Footer />
    </div>
);

export default App;
