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
        height: 85vh;
    }
    
    @media (max-width: 425px) { 
        height: 40vh;
    }
`;

const connections = [
    {
        url: "https://github.com/jazcarate",
        "icon": "https://simpleicons.org/icons/github.svg",
        "title": "GitHub"
    }, {
        url: "https://gitlab.com/jazcarate",
        "icon": "https://simpleicons.org/icons/gitlab.svg",
        "title": "GitLab"
    }, {
        url: "https://www.linkedin.com/in/joaquin-azcarate/",
        "icon": "https://simpleicons.org/icons/linkedin.svg",
        "title": "linkedIn"
    }, {
        url: "mailto:j@florius.com.ar",
        "icon": "https://simpleicons.org/icons/gmail.svg",
        "title": "E-Mail"
    },
];

const Header = () => {
    return (
        <Wrapper>
            <h1>I'm <Highlight>Joaquin Azcarate</Highlight></h1>
            <h2>Software engineer.</h2>

            <section id="connect">
                <Connections>
                    {connections.map(({ url, icon, title }, i) =>
                        <Connection key={`connection-${i}`}>
                            <a href={url} target="_blank" title={title}>
                                <SocialIcon src={icon} delay={100 + i * 130} />
                            </a>
                        </Connection>)}
                </Connections>
            </section>
        </Wrapper>
    );
};


export default Header;
