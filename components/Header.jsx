import React from "react";
import styled, { keyframes } from 'styled-components';

const Highlight = styled.span`
  color: palevioletred;
`;

const dropIn = keyframes`
    0%   { transform: translate3D(0, 3em, 0); opacity: 0; }
    100% { transform: translate3D(0, 0, 0);  opacity: 1; }
`;

const SocialBlock = styled.span`
    border-bottom: 3px solid transparent;
    transition: border-color 300ms linear;
    padding: 6px;
    border-radius: 5px;

    &:hover {
        border-color: ${props => props.color}
    }
    
    animation: ${dropIn} cubic-bezier(0, 0, 0.1, 1) 1 1s forwards;
    animation-delay: ${props => props.$delay}ms;
    transform: translate3D(0, 3em, 0);
    opacity: 0;
`;

const SocialIcon = styled.img`
    height: 1.3em;
    width: 1.3em;
    vertical-align: middle;
`

const Connections = styled.ul`
    list-style: none;
    padding: 0;
`;

const Connection = styled.li`
    margin: 0 8px;
    display: inline;
`;

const ConnectionLink = styled.a`
  text-decoration: none;
  color: inherit;

  &:visited {
    color: inherit;
  }
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
        icon: "/icons/GitHub.svg",
        title: "GitHub",
        color: "#181717"
    }, {
        url: "https://gitlab.com/jazcarate",
        icon: "/icons/GitLab.svg",
        title: "GitLab",
        color: "#FCA121"
    }, {
        url: "https://www.linkedin.com/in/joaquin-azcarate/",
        icon: "/icons/LinkedIn.svg",
        title: "LinkedIn",
        color: "#0077B5"
    }, {
        url: "/cv.htm",
        text: "CV",
        title: "Curriculum",
        color: "palevioletred"
    }, {
        url: "https://blog.florius.com.ar",
        text: "Blog",
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
                    {connections.map(({ url, text, icon, title, color }, i) =>
                        <Connection key={`connection-${i}`}>
                            <ConnectionLink href={url} target="_blank" rel="noreferrer noopener" title={title}>
                                <SocialBlock alt={title} $delay={100 + i * 130} color={color}>
                                    {text ? text : <SocialIcon src={icon} />}
                                </SocialBlock>
                            </ConnectionLink>
                        </Connection>)}
                </Connections>
            </section>
        </Wrapper>
    );
};


export default Header;
