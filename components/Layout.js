import React from 'react'
import Head from 'next/head'
import Nav from './nav'

const Layout = ({ children }) => {
	return (
		<div>
			<Head>
				<title>Home</title>
				<link rel="icon" href="/static/favicon.ico" />
			</Head>
			<Nav />
			<main>{children}</main>
		</div>
	)
}

export default Layout
