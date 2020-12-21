import React, { Component } from 'react';
import { MenuItems } from './MenuItems';

class Navbar extends Component {
	render() {
		return (
			<nav className="NavbarItem">
				<h1 className="navbar-logo">{this.props.title}</h1>
				<div className="menu-icon"></div>
				<ul>
					<li><a className="menu"></a></li>
				</ul>
			</nav>
		);
	}
}

export default Navbar