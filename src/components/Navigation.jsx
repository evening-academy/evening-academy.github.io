import React from 'react';
import { createUseStyles } from 'react-jss';
import { NavLink } from 'react-router-dom';

const myStyles = createUseStyles({
    appNav: {
        '& ul': {
            display: "flex",
            gap: "2rem",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            listStyle: "none",
            margin: 0,
        }

    }
});

export default function Navigation() {
    const classes = myStyles();
    return (
        <nav className={classes.appNav}>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">about</NavLink></li>
                <li><NavLink to="/contact">contact</NavLink></li>
                <li><NavLink to="/list">list</NavLink></li>
                <li><NavLink to="/test">test</NavLink></li>
            </ul>
        </nav>
    )
}
