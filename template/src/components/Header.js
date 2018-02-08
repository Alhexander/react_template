import React, { Component } from 'react';
import react_img from '../img/react.svg';

class Header extends Component {
	render() {
		return (
			<div className="header-01">
				<div className="header-02">
					<div className="header-03">
					<a className="header-logo" href="/">
						<img src={react_img} alt=""/>
						<span className="header-name">React</span>
					</a>
					 <nav className="header-nav">	
					 	 <a className="header-a" href="">Docs</a>
						 <a className="header-a" href="">Tutorial</a>
						 <a className="header-a" href="">Comunity</a>
						 <a className="header-a" href="">Blog</a>
					 </nav>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;