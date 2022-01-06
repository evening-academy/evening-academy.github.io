import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Article from '../Article/Article'
import Contact from '../Contact/Contact';

import { createUseStyles } from 'react-jss';

const myStyles = createUseStyles({
    main: {
        gridArea: "main",
        // background: {
        //     color: `color: hsl(1, 1%, 99%);`,
        // },
        padding: {
            // left: "0.5rem",
        },
    }
});

export default function MainContent() {
    const classes = myStyles();
    return (
        <main className={classes.main}>
            <Routes>
                <Route path='/' element={< Article fileName='js-settimeout-setinterval' />} />
                <Route path='/markdown' element={< Article fileName='markdown-test-file' />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </main>
    )
}

//js-settimeout-setinterval
//css-introduction