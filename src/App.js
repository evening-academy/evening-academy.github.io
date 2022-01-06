import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import MainContent from './components/MainContent';
import Slider from './components/Sidebar/Sidebar';
import Header from './components/Header';
import Footer from './Footer';

import { createUseStyles } from 'react-jss';

const myStyles = createUseStyles({
	myApp: {
		display: "block",
		background: {
			color: `color: hsl(1, 1%, 99%)`,
		},
		// border: {
		// 	width: 1, // jss-plugin-default-unit makes this 1px
		// 	style: "solid",
		// 	color: "tomato"
		// },
		margin: {
			// jss-plugin-expand gives more readable syntax
			top: '0',
			right: "auto",
			bottom: 0,
			left: "auto"
		},
		padding: {
			// jss-plugin-expand gives more readable syntax
			top: '0',
			right: '0',
			bottom: '0',
			left: '0'
		},
		'& header.header': {
			// jss-plugin-nested applies this to a child header
			// fontWeight: 'bold', // jss-plugin-camel-case turns this into 'font-weight',
			color: "red"
		},
	},
	'@media (min-width: 1200px)': {
		myApp: {
			display: "grid",
			maxWidth: "130rem",
			// minWidth: "30rem",
			width: "85vw",
			gridTemplateColumns: '1fr 1fr 1fr',
			gridTemplateAreas: `
					"header header header"
					"main main sidebar"
					"footer footer footer"
					`,
			gap: "1rem;",
		}
	}
});
// const appClasses = { button: 'button-123456 active-123456 btn btn-primary' }

export default function App() {
	const classes = myStyles();
	return (
		<div className={classes.myApp}>
			<Helmet>
				<title>Evening Academy</title>
				<meta name="description" content="Evening Academy" />
				<meta name="theme-color" content="#000000" />
			</Helmet>
			<Header />
			<MainContent />
			<Slider />
			<Footer />
		</div >
	)
}
