import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Article from './Article/Article'
import Contact from './Contact';

import { createUseStyles } from 'react-jss';

const myStyles = createUseStyles({
    main: {
        gridArea: "main",
        background: {
            color: `hsl(0, 0%, 95%);`,
        },
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
                <Route path='/' element={< Article />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </main>

    )
}
