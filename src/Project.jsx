import React from "react";
import styled from 'styled-components';

import ConditionalWrapper from './ConditionalWrapper';

const Preview = styled.img`
    clip-path: circle(50% at center);
    height: 3em;
`;

const Caption = styled.figcaption`
    display: none;
`;

const Project = ({ name, url, image, description, tags, challenges }) => {
    const WithLink = (props) => <ConditionalWrapper condition={url} wrapper={children => <a href={url}>{children}</a>} {...props} />

    return (<>
        <dt>
            <WithLink>{name}</WithLink>
            <dd>
                {image && <figure>
                    <WithLink>
                        <Preview src={image} alt={`${name} screenshot`} />
                    </WithLink>
                    <Caption>Project {name}</Caption>
                </figure>
                }

                <details>
                    <summary>{description}</summary>

                    <h3>Challenge</h3>
                    {challenges.length == 1 ? <>{challenges[0]}</> : <ul>
                        {challenges.map((challenge, i) => <li key={`challenge-${name}-${i}`}>{challenge}</li>)}
                    </ul>}
                </details>

                <ul className="tag-cloud">
                    {tags.map(({ type, definition, name }, i) => {
                        const WithDefinition = (props) => <ConditionalWrapper condition={definition} wrapper={children => <abbr title={definition}>{children}</abbr>} {...props} />

                        return <li key={`tag-${i}`} className={`tag-cloud-${type}`}>
                            <WithDefinition>
                                {name}
                            </WithDefinition>
                        </li>
                    })}
                </ul>

                <dl>
                    <dt>Source code</dt>
                    <dd><a href="https://gitlab.com/jazcarate/timer" title="GitLab::jazcarate/timer">GitLab</a></dd>
                </dl>
            </dd>
        </dt>
    </>);
};


export default Project;
