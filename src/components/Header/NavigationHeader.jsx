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
            padding: 0,
        }
    }
});

export default function Navigation() {
    const classes = myStyles();
    return (
        <nav className={classes.appNav}>
            <ul>
                <li><NavLink to="/first-step">Введение</NavLink></li>
                <li><NavLink to="/html">HTML</NavLink></li>
                <li><NavLink to="/css">CSS</NavLink></li>
                <li><NavLink to="/javascript">JavaScript</NavLink></li>
                <li><NavLink to="/git">Git</NavLink></li>
                <li><NavLink to="/markdown">Markdown</NavLink></li>
            </ul>
        </nav>
    )
}
