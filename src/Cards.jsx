import React from "react";
import styled from 'styled-components';

import Card from './Card';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const Cards = ({ projects }) => {
    return (<>
        <Wrapper>
            {projects.map((p, i) => <Card {...p} key={`card-${i}`} />)}
        </Wrapper>
    </>);
};


export default Cards;
