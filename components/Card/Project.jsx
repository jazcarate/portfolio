import React, { useState, useEffect } from "react";
import styled from 'styled-components';

import RandomFig from './RandomFig';
import encode from '../nameEncode';

import { CardStock, Footer, Tag } from "./Card";

export const Info = styled.div`
    flex-direction: column;
    grid-column: 6 / span 6;
    grid-row: 2 / span 2;
    justify-content: center;
    text-align: center;
    z-index: 3;

    background: black;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;

const ProjectCard = ({ name, tags }) => {
    const safeName = "project-" + encode(name);
    const [numFigures, setNumFigures] = useState(0);
    useEffect(() => {
        setNumFigures(1 + Math.floor(Math.random() * 3));
    }, []);

    return (<>
        <CardStock href={`#${safeName}`} id={`back-${safeName}`}>
            {[...Array(numFigures).keys()].map(i => <RandomFig key={`figure-${name}-${i}`} />)}
            <Info>{name}</Info>
            <Footer>
                {tags.map((t, i) => <Tag key={`cardtag-${name}-${i}`}>{t.name}</Tag>)}
            </Footer>
        </CardStock>
    </>);
};


export default ProjectCard;
