import React from "react";
import styled from 'styled-components';

import ConditionalWrapper from './ConditionalWrapper';
import encode from './nameEncode';

const Preview = styled.img`
    clip-path: circle(50% at center);
    height: 3em;
`;

const Caption = styled.figcaption`
    display: none;
`;

const Snaked = styled.dl`
    border-top: 2px solid #ccc;
    margin:0;
    padding: 30px;
    background-clip: padding-box;
  
    &:nth-child(even) {
        border-left: 2px solid #ccc;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
        margin-right: 30px; 
        padding-right: 0;
    }

    &:nth-child(odd) {
        border-right: 2px solid #ccc;
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
        margin-left: 30px; 
        padding-left: 0;
    }

    &:first-child {
        border-top: none;
        border-top-right-radius: 0;
        border-top-left-radius: 0;
    }

    &:last-child {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }
`;

const InlineLu = styled.ul`
    list-style: none;
    padding: 0;
`;

const InlineLi = styled.li`
    margin: 0 8px;
    display: inline-block;
`;

const Link = styled.a`
    color: inherit;
`;

const Project = ({ name, url, source, description, tags, challenges }) => {
    const WithLink = (props) => <ConditionalWrapper condition={url} wrapper={children => <Link href={url}>{children}</Link>} {...props} />

    return (<>
        <Snaked id={encode(name)}>
            <dt>
                <h2>
                    <WithLink>{name}</WithLink>
                </h2>
            </dt>
            <dd>
                <p>{description}</p>

                <h4>Challenge</h4>
                {challenges.length == 1 ? <>{challenges[0]}</> : <ul>
                    {challenges.map((challenge, i) => <li key={`challenge-${name}-${i}`}>{challenge}</li>)}
                </ul>}

                <h4>Link</h4>
                <InlineLu>
                    {url && <InlineLi>
                        <Link href={url} title={`${name}`}><strong>{name}</strong></Link>
                    </InlineLi>}
                    {source && <InlineLi>
                        <Link href={source} title={`${name} source code`}><code>Source code</code></Link>
                    </InlineLi>}
                </InlineLu>

                <h4>Tags</h4>
                <InlineLu>
                    {tags.map(({ type, definition, name }, i) => {
                        const WithDefinition = (props) => <ConditionalWrapper condition={definition} wrapper={children => <abbr title={definition}>{children}</abbr>} {...props} />

                        return <InlineLi key={`tag-${i}`} className={`tag-cloud-${type}`}>
                            #<WithDefinition>
                                {name}
                            </WithDefinition>
                        </InlineLi>
                    })}
                </InlineLu>
            </dd>
        </Snaked>
    </>);
};


export default Project;
