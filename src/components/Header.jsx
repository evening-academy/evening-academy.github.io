import React from 'react'
import { NavLink } from 'react-router-dom'
import Navigation from './Navigation';
import { createUseStyles } from 'react-jss';

const myStyles = createUseStyles({
    header: {
        gridArea: "header",
        padding: {
            // jss-plugin-expand gives more readable syntax
            top: '0.5rem',
            right: "1rem",
            bottom: "0.5rem",
            left: "1rem"
        },
        border: {
            width: 1,
            style: "solid",
            color: `hsl(0, 0%, 90%);`,
        },
        display: "flex",
        // flexDirection: 'row',
        alignItems: "center",
        justifyContent: "start",
        // alignContent: "flex-start",
        '& h1': {
            flexBasis: "30%",
            // alignSelf: "center",
        }
    },
});
export default function Header() {
    const classes = myStyles();
    return (
        <header className={classes.header}>
            <h1>
                <NavLink to="/">Вечерняя&nbsp;академия</NavLink>
            </h1>
            <Navigation />
        </header>
    )
}
