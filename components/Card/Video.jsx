import React from "react";
import styled from 'styled-components';

import encode from '../nameEncode';

import portfolio from '../../public/portfolio.json';

import { CardStock, Footer } from "./Card";

export const YouTube = styled.div`
    grid-column: 1 / span 12;
    grid-row: 1 / span 3;

    height: 100%;
    width: 100%;

    background-image: url(${props => `http://img.youtube.com/vi/${props.$image}/hqdefault.jpg`}), url(${props => `http://img.youtube.com/vi/${props.$image}/default.jpg`});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center 30%;         
`;

const VideoCard = ({ name, slug }) => {
    const list = portfolio.videos.playlist;
    const safeName = "video-" + encode(name);
    const link = `http://www.youtube.com/watch?v=${slug}&list=${list}`;

    return (<>
        <CardStock href={link} id={safeName} target="_blank" rel="noopener noreferrer">
            <YouTube $image={slug} aria-label={name + " in YouTube"} role="img" />
            <Footer>
                {name}
            </Footer>
        </CardStock>
    </>);
};


export default VideoCard;
