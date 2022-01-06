import React from 'react'
import { createUseStyles } from 'react-jss';
import Timer from '../Timer/Timer';

const myStyles = createUseStyles({
    sidebar: {
        gridArea: "sidebar",
        // background: {
        //     color: `color: hsl(1, 1%, 99%);`,
        // },
        // color: "blue",
        // border: {
        //     width: 1,
        //     style: "solid",
        //     color: `hsl(0, 0%, 90%);`,
        // },
        padding: {
            left: "1rem",
            right: "1rem",
        },
    },

});

export default function Sidebar() {
    const classes = myStyles();

    return (
        <aside className={classes.sidebar}>
            <h3>Сайт в разработке</h3>
            <Timer />
        </aside>
    )
}
