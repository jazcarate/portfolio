import React from "react";

import "./style.scss";
import Header from './Header';
import Project from './Project';
import Footer from './Footer';

import projects from './projects.json';

const App = () => {
    return (
        <>
            <Header />

            <section id="portfolio">
                <h1>Portfolio</h1>

                <dl>
                    {projects.map((p, i) => <Project {...p} key={`project-${i}`} />)}
                </dl>
            </section>

            <Footer />
        </>
    );
}

export default App;
