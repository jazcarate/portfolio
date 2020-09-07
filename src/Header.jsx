import React from "react";
import styled from 'styled-components';

const Title = styled.h1`
  color: palevioletred;
`;

const SocialIcon = styled.img`
    height: 1em;
`

const Header = () => {
    return (
        <header>
            <Title>I'm Joaquin Azcarate</Title>
            <h2>And I'm a human</h2>

            <section id="connect">
                <ul>
                    <li>
                        <a href="https://github.com/jazcarate" target="_blank" title="GitHub">
                            <SocialIcon src="https://simpleicons.org/icons/github.svg" /> GitHub
                            </a>
                    </li>
                    <li>
                        <a href="https://gitlab.com/jazcarate" target="_blank" title="GitLab">
                            <SocialIcon src="https://simpleicons.org/icons/gitlab.svg" /> GitLab
                            </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/joaquin-azcarate/" target="_blank" title="linkedIn">
                            <SocialIcon src="https://simpleicons.org/icons/linkedin.svg" /> LinkedIn
                            </a>
                    </li>

                </ul>
            </section>
        </header>
    );
};


export default Header;
