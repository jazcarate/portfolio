import styled from 'styled-components';

const Link = styled.a`
    color: inherit;
    background-image: linear-gradient(to right, yellow 0, yellow 100%);
    background-position: 0 -0.1em;
    background-size: 0 100%;
    background-repeat: no-repeat;
    transition: background .5s;
    & :hover {
        background-size: 100% 100%;
    }
`;

export default Link;