import React from "react";
import styled from 'styled-components';

import Header from './Header';
import Project from './Project';
import Cards from './Cards';
import Footer from './Footer';
import ProjectCard from './Card/Project';
import VideoCard from './Card/Video';

import portfolio from '../public/portfolio.json';

const Wrapper = styled.div`
    margin: 0 auto;
    width: 70%;

    @media (max-width: 915px) { 
        width: 100%;
    }
`;

const Hr = styled.hr`
    overflow: visible;
    height: 30px;
    border-style: solid;
    border-color: black;
    border-width: 1px 0 0 0;
    border-radius: 20px;
    margin-top: 2em;
    width: 85%;

    &:before {
        display: block;
        content: "";
        height: 30px;
        margin-top: -31px;
        border-style: solid;
        border-color: black;
        border-width: 0 0 1px 0;
        border-radius: 20px;
    }
`;

const App = () => {
    return (
        <>
            <Wrapper>
                <Header />

                <Hr />
                <section id="videos">
                    <h2>My videos</h2>
                    <Cards list={portfolio.videos.items} Card={VideoCard} />
                </section>

                <Hr />
                <section id="deck">
                    <h2>My projects</h2>
                    <Cards list={portfolio.projects} Card={ProjectCard} />
                </section>

                <Hr />
                <section id="portfolio">
                    <h2>Details</h2>
                    <dl>
                        {portfolio.projects.map((p, i) => <Project {...p} key={`project-${i}`} />)}
                    </dl>
                </section>

                <Footer />
            </Wrapper>
        </>
    );
}

export default App;
