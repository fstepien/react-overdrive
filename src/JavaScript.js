import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import left from './caret-square-left.svg';
import right from './caret-square-right.svg';
import pack from './pack.png';
import reactImage from './React.png';

class JavaScript extends Component {
	render() {
		return (
			<React.Fragment>
				<section className="slide react">
					<h2>JavaScript</h2>
					<p>
						Components let you split the UI into independent, reusable pieces,
						and think about each piece in isolation.
					</p>
					<div className="image">
						<img src={reactImage} alt="" />
					</div>
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
