import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import left from './caret-square-left.svg';
import right from './caret-square-right.svg';
import packTop from './pack-top.png';
import packBottom from './pack-bottom.png';
import animations from './animations.png';
import unlock from './unlock.svg';

class Transitions extends Component {
	render() {
		return (
			<React.Fragment>
				<section className="slide welcome">
					<h2>CSS ANIMATIONS</h2>
					<img src={unlock} className="lock unlock" alt="unlocked pad lock" />
					<img
						src={animations}
						className="animation-code"
						alt="css for animations"
					/>
					<img
						src={packTop}
						className="pack-css-top"
						alt="pink hip pack top zip"
					/>
					<img
						src={packBottom}
						className="pack pack-css pack-css-bottom"
						alt=""
					/>
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
