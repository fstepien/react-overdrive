import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import left from './caret-square-left.svg';
import right from './caret-square-right.svg';
import pack from './pack.png';

class Transitions extends Component {
	render() {
		return (
			<React.Fragment>
				<section className="slide welcome">
					<h2>CSS TRANSITIONS</h2>
					<img src={pack} className="pack" alt="pink hip pack" />
				</section>
				<Link to={'/'}>
					<img
						src={left}
						className="arrow-previous arrow"
						alt="left arrow icon"
					/>
				</Link>
				<Link to="/JavaScript">
					<img src={right} className="arrow-next arrow" alt="left arrow icon" />
				</Link>
			</React.Fragment>
		);
	}
}

export default Transitions;
