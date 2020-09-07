import React from "react";
import styled from 'styled-components';

import RandomFig from './RandomFig';
import encode from './nameEncode';

const CardStock = styled.a`
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 3px rgba(0,0,0,0.22);
    display: grid;
    height: 200px;
    margin: 10px 6px;
    width: 300px;
    flex-grow: 1;

    color: inherit;
    text-decoration: inherit;

    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(4, 1fr);
`;

const Info = styled.div`
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

const Footer = styled.ul`
    overflow: hidden;
    grid-row: 4 / span 1;
    grid-column: 1 / span 10;
    font-size: 0.75em;
    background: white;
    margin: 0;
    padding: 9px;
    z-index: 2;
    text-overflow: ellipsis;
    white-space: nowrap;

    list-style: none;
    & ::after {
        content: "·";
    }
    & :last-child::after {
        content: "";
    }
`;

const Tag = styled.li`
    display: inline-block;
`;

const Card = ({ name, tags }) => {
    const numberOfStuff = 1 + Math.floor(Math.random() * 3);

    return (<>
        <CardStock href={`#${encode(name)}`}>
            {[...Array(numberOfStuff).keys()].map(i => <RandomFig key={`figure-${name}-${i}`} />)}
            <Info>{name}</Info>
            <Footer>
                {tags.map((t, i) => <Tag key={`cardtag-${name}-${i}`}>{t.name}</Tag>)}
            </Footer>
        </CardStock>
    </>);
};


export default Card;
