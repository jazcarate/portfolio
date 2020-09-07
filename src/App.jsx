import React from "react";

import "./style.scss";
import Header from './Header';

const App = () => {
    return (
        <>
            <Header />

            <section id="portfolio">
                <h1>Portfolio</h1>

                <dl>
                    <dt>Timers</dt>
                    <dd>
                        <figure class="left">
                            <a href="http://timers.florius.com.ar/">
                                <img src="/img/timers.png" alt="Timers screenshot" />
                            </a>
                            <figcaption>Project 1. Timers</figcaption>
                        </figure>

                        <p>
                            In a Magic: the Gathering tournament we usually need to show a big round timer. Each round is 50
                            minutes long, and we occasionally need to show multiple clocks (for other events in the same venue).
                            For this, we need an app that has:
                        </p>

                        <ul class="tag-cloud">
                            <li class="tag-cloud-language">node</li>
                            <li class="tag-cloud-language">TypeScript</li>
                            <li class="tag-cloud-framework">React</li>
                            <li class="tag-cloud-technology">Service Worker</li>
                            <li class="tag-cloud-technology"><abbr title="Single Page Application">SPA</abbr></li>
                            <li class="tag-cloud-technology"><abbr title="Progressive Web App">PWA</abbr></li>
                            <li class="tag-cloud-infrastructure"><abbr title="GitLab Continuous Integration">GitLab CI</abbr>
                            </li>
                        </ul>

                        <dl>
                            <dt>Source code</dt>
                            <dd><a href="https://gitlab.com/jazcarate/timer" title="GitLab::jazcarate/timer">GitLab</a></dd>
                        </dl>
                    </dd>
                </dl>
            </section>

            <footer>
                Footer
            </footer>
        </>
    );
}

export default App;
