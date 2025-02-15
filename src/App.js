import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Summary from './components/Summary';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
    useEffect(() => {
        AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
    }, []);

    return (
        <div className="min-h-screen">
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
};

export default App;
