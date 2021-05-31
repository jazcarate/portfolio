import React from "react";
import styled, { keyframes } from 'styled-components';

const Highlight = styled.span`
  color: palevioletred;
`;

const dropIn = keyframes`
    0%   { transform: translate3D(0, 3em, 0); opacity: 0; }
    100% { transform: translate3D(0, 0, 0);  opacity: 1; }
`;

const SocialIcon = styled.img`
    height: 1.3em;
    width: 1.3em;
    border-bottom: 3px solid transparent;
    transition: border-color 300ms linear;
    padding: 6px;
    border-radius: 5px;

    &:hover {
        border-color: ${props => props.color}
    }
    
    animation: ${dropIn} cubic-bezier(0, 0, 0.1, 1) 1 1s forwards;
    animation-delay: ${props => props.delay}ms;
    transform: translate3D(0, 3em, 0);
    opacity: 0;
`

const Connections = styled.ul`
    list-style: none;
    padding: 0;
`;

const Connection = styled.li`
    margin: 0 8px;
    display: inline;
`;

const Wrapper = styled.header`
    @media (min-width: 425px) { 
        margin-top: 10vh;
        height: 84vh;
    }
    
    @media (max-width: 425px) { 
        height: 40vh;
    }
`;

const SubTitle = styled.p`
    font-size: 1.5em;
    margin-top: 0.83em 0;
    font-weight: bold;
`;

const connections = [
    {
        url: "https://github.com/jazcarate",
        icon: "https://simpleicons.org/icons/github.svg",
        title: "GitHub",
        color: "#181717"
    }, {
        url: "https://gitlab.com/jazcarate",
        icon: "https://simpleicons.org/icons/gitlab.svg",
        title: "GitLab",
        color: "#FCA121"
    }, {
        url: "https://www.linkedin.com/in/joaquin-azcarate/",
        icon: "https://simpleicons.org/icons/linkedin.svg",
        title: "LinkedIn",
        color: "#0077B5"
    }, {
        url: "https://blog.florius.com.ar",
        icon: "/blogging.svg",
        title: "Personal Blog",
        color: "palevioletred"
    },
];

const Header = () => {
    return (
        <Wrapper>
            <h1>I'm <Highlight>Joaquin Azcarate</Highlight></h1>
            <SubTitle>Software engineer.</SubTitle>

            <section id="connect">
                <Connections>
                    {connections.map(({ url, icon, title, color }, i) =>
                        <Connection key={`connection-${i}`}>
                            <a href={url} target="_blank" rel="noreferrer noopener" title={title}>
                                <SocialIcon alt={title} src={icon} delay={100 + i * 130} color={color} />
                            </a>
                        </Connection>)}
                </Connections>
            </section>
        </Wrapper>
    );
};


export default Header;
