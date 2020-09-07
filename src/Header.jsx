import React from "react";
import styled from 'styled-components';

const Highlight = styled.span`
  color: palevioletred;
`;

const SocialIcon = styled.img`
    height: 1.3em;
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
        height: 80vh;
    }
    
    @media (max-width: 425px) { 
        margin-bottom: 2em;
    }
`;

const Header = () => {
    return (
        <Wrapper>
            <h1>I'm <Highlight>Joaquin Azcarate</Highlight></h1>
            <h2>A software engineer</h2>

            <section id="connect">
                <Connections>
                    <Connection>
                        <a href="https://github.com/jazcarate" target="_blank" title="GitHub">
                            <SocialIcon src="https://simpleicons.org/icons/github.svg" />
                        </a>
                    </Connection>
                    <Connection>
                        <a href="https://gitlab.com/jazcarate" target="_blank" title="GitLab">
                            <SocialIcon src="https://simpleicons.org/icons/gitlab.svg" />
                        </a>
                    </Connection>
                    <Connection>
                        <a href="https://www.linkedin.com/in/joaquin-azcarate/" target="_blank" title="linkedIn">
                            <SocialIcon src="https://simpleicons.org/icons/linkedin.svg" />
                        </a>
                    </Connection>

                </Connections>
            </section>
        </Wrapper>
    );
};


export default Header;
