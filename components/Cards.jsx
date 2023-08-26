import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const Cards = ({ list, Card }) => {
    return (<>
        <Wrapper>
            {list.map((p, i) => <Card {...p} key={`card-${i}`} />)}
        </Wrapper>
    </>);
};


export default Cards;
