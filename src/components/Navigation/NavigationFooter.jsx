import React from 'react';
import { createUseStyles } from 'react-jss';
import { NavLink } from 'react-router-dom';

const myStyles = createUseStyles({
    appNavFooter: {
        '& ul': {
            display: "flex",
            gap: "2rem",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            listStyle: "none",
            margin: 0,
            paddingBottom: 0,
        }

    }
});

export default function Navigation() {
    const classes = myStyles();
    return (
        <nav className={classes.appNavFooter}>
            <ul>
                <li><NavLink to="/contact">Контакты</NavLink></li>
            </ul>
        </nav>
    )
}
