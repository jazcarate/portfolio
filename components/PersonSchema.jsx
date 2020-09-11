import { jsonLdScriptProps } from "react-schemaorg";

const Me = jsonLdScriptProps({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Joaquin Azcarate",
    "jobTitle": "Software Developer",
    "knowsLanguage": [
        {
            "@type": "Language",
            "name": "Spanish",
            "alternateName": "es"
        }, {
            "@type": "Language",
            "name": "English",
            "alternateName": "en"
        }
    ]
})

export default Me;