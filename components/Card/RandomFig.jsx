import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const TriangleBR = styled.div`
    clip-path: polygon(100% 100%, 100% 0%, 0% 100%);
    background: ${props => props.color};
    grid-row: ${props => props.posY} / span ${props => props.sizeY};
    grid-column: ${props => props.posX} / span ${props => props.sizeX};
`;

const TriangleTL = styled.div`
    clip-path: polygon(0% 100%, 100% 0%, 0% 0%);
    background: ${props => props.color};
    grid-row: ${props => props.posY} / span ${props => props.sizeY};
    grid-column: ${props => props.posX} / span ${props => props.sizeX};
`;

const TriangletR = styled.div`
    clip-path: polygon(100% 100%, 100% 0%, 0% 0%);
    background: ${props => props.color};
    grid-row: ${props => props.posY} / span ${props => props.sizeY};
    grid-column: ${props => props.posX} / span ${props => props.sizeX};
`;

const Dots = styled.div`
    background: radial-gradient(${props => props.color} 20%, transparent 19%), radial-gradient(black 20%, transparent 19%), transparent;
    background-size: 6px 6px;
    background-position: 0 0, 3px 3px;
    grid-row: ${props => props.posY} / span ${props => props.sizeY};
    grid-column: ${props => props.posX} / span ${props => props.sizeX};
`;

const Solid = styled.div`
    background: ${props => props.color};
    grid-row: ${props => props.posY} / span ${props => props.sizeY};
    grid-column: ${props => props.posX} / span ${props => props.sizeX};
`;

const possibleShapes = [
    TriangleBR, TriangleTL, TriangletR, Dots, Solid, Solid, Solid, Solid
]

const possibleColors = [
    '#eee', '#bbb', '#999'
];

function randomChoice(arr) {
    return arr[randomRange(0, arr.length - 1)];
}

function randomRange(min, max) {
    return min + Math.floor(Math.random() * (max - min))
}

const MAX_WIDTH = 11;
const MAX_HEIGHT = 4;

const RandomFig = () => {
    const [color, setColor] = useState(null);
    const [Figure, setFigure] = useState(null);
    const [positions, setPositions] = useState(null);

    useEffect(() => {
        setColor(randomChoice(possibleColors));
        setFigure(randomChoice(possibleShapes));

        setPositions([
            randomRange(1, MAX_WIDTH), randomRange(4, MAX_WIDTH),
            randomRange(1, MAX_HEIGHT), randomRange(1, MAX_HEIGHT)
        ]);
    }, []);

    if (color && Figure && positions) {
        const [posX, sizeX, posY, sizeY] = positions;
        return <Figure color={color} posY={posY} posX={posX} sizeY={sizeY} sizeX={sizeX} />
    }
    return <></>;
};


export default RandomFig;
