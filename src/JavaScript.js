import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import left from './caret-square-left.svg';
import right from './caret-square-right.svg';
import packTop from './pack-top.png';
import packBottom from './pack-bottom.png';

class JavaScript extends Component {
	render() {
		return (
			<React.Fragment>
				<section className="slide react">
					<h2>JAVASCRIPT</h2>
					<img
						src={packTop}
						className="pack pack-top"
						alt="pink hip pack top zip"
					/>
					<img
						src={packBottom}
						className="pack"
						alt="pink hip pack main pack"
					/>
				</section>
				<Link to={'/Animations'}>
					<img
						src={left}
						className="arrow-previous arrow"
						alt="left arrow icon"
					/>
				</Link>
				<Link to="/React3D">
					<img src={right} className="arrow-next arrow" alt="left arrow icon" />
				</Link>
			</React.Fragment>
		);
	}
}

export default JavaScript;
