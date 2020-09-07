import React from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from 'styled-components'

import App from "./App";

const sheet = new ServerStyleSheet()

export default function build() {
    return [
        renderToString(sheet.collectStyles(<App />)),
        sheet.getStyleTags()
    ];
} 