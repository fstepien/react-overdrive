import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import right from './caret-square-right.svg';

class Welcome extends Component {
	render() {
		return (
			<React.Fragment>
				<section className="slide welcome">
					<h2>react-overdrive</h2>
					<p>super easy magic-move transitions for React apps.</p>{' '}
				</section>

				<Link to={'/Animations'}>
					<img
						src={right}
						onClick={this.nextSlide}
						className="arrow-next arrow"
						alt="left arrow icon"
					/>
				</Link>
			</React.Fragment>
		);
	}
}

export default Welcome;
