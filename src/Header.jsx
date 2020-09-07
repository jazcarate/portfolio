import React from "react";

const divStyle = {
    color: 'blue',
};

const Header = () => {
    return (
        <header>
            <h1 style={divStyle}>I'm <span class="highlight">Joaquin Azcarate</span></h1>
            <h2>And I'm a human</h2>

            <section id="connect">
                <ul>
                    <li>
                        <a href="https://github.com/jazcarate" target="_blank" title="GitHub">
                            <img src="https://simpleicons.org/icons/github.svg" /> GitHub
                            </a>
                    </li>
                    <li>
                        <a href="https://gitlab.com/jazcarate" target="_blank" title="GitLab">
                            <img src="https://simpleicons.org/icons/gitlab.svg" /> GitLab
                            </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/joaquin-azcarate/" target="_blank" title="linkedIn">
                            <img src="https://simpleicons.org/icons/linkedin.svg" /> LinkedIn
                            </a>
                    </li>

                </ul>
            </section>
        </header>
    );
};


export default Header;
