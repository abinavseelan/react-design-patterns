import React from 'react';

const strings = {
    en: {
        title: 'to infinity and beyond 🚀',
    },
    fr: {
        title: 'vers l\'infini et au-delà 🚀',
    }
}


const translateString = (lang) => (key) => strings[lang][key];

const Translate = (lang) => (Component) => {
    return (props) => (
        <Component
            {...props}
            t={translateString(lang)}
        />
    )
}

export default Translate;