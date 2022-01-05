import React from 'react'
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';

const myStyles = createUseStyles({
    footer: {
        gridArea: "footer",
        display: "flex",
        justifyContent: "space-evenly",
        background: `#343434`,
        color: "white;",
        fontSize: "1.2rem",
        padding: {
            // jss-plugin-expand gives more readable syntax
            top: '1rem',
            right: "1rem",
            bottom: "1rem",
            left: "1rem"
        },
        border: {
            radius: `0 0 1rem 1rem`,
        },
        '& a.footer-link': {
            color: "white",
        }
    }
});

export default function Footer() {
    const classes = myStyles();
    return (
        <footer className={classes.footer}>
            <div>©by <Link className='footer-link' to="/contact">andron13</Link></div>
            <div>2021 - {(new Date()).getFullYear()}</div>
            <div><a className='footer-link' href="http://evening.academy/">evening.academy</a></div>
        </footer>
    )
}
