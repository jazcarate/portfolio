import React from "react";
import styled from 'styled-components';

import Link from './Link';

const Thick = styled.footer`
    background: #ccc;
    padding: 5px 3em;
    color: black;
    border-radius: 20px 20px 0 0;
    text-align: right;
`;

const Footer = () => {
    return (
        <Link href="#deck">
            <Thick>
                Back to projects
            </Thick>
        </Link>
    );
};


export default Footer;
