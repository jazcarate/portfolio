import styled, { keyframes } from 'styled-components';

export const popOut = keyframes`
    0%   { opacity: 0; box-shadow: 0 0 0 rgba(0,0,0,0.25), 0 0 0 rgba(0,0,0,0.22); }
    30%  { opacity: 1}
    100% { opacity: 1; box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 3px rgba(0,0,0,0.22); }
`;

export const CardStock = styled.a`
    box-shadow: 0 0 0 rgba(0,0,0,0.25), 0 0 0 rgba(0,0,0,0.22);
    display: grid;
    height: 200px;
    margin: 10px 6px;
    width: 300px;
    flex-grow: 1;

    color: inherit;
    text-decoration: inherit;

    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(4, 1fr);

    animation: ${popOut} cubic-bezier(0, 0, 0.1, 1) 1 1s forwards 300ms;
    opacity: 0;
`;

export const Footer = styled.ul`
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
`;

export const Tag = styled.li`
    display: inline-block;
    &::after {
        content: "·";
    }
    &:last-child::after {
        content: "";
    }
`;