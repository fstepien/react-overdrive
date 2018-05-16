import React, { Component } from 'react';
import Overdrive from 'react-overdrive';

import { Link } from 'react-router-dom';
import left from './caret-square-left.svg';
import right from './caret-square-right.svg';
import reactImage from './React.png';

class React3D extends Component {
	render() {
		return (
			<React.Fragment>
				<section className="slide react">
					<h2>REACT</h2>
					<p>
						Components let you split the UI into independent, reusable pieces,
						and think about each piece in isolation.
					</p>
					<div className="image">
						<Overdrive id="overdrive-one">
							<img src={reactImage} alt="" />
						</Overdrive>
					</div>
				</section>
				<Link to={'/JavaScript'}>
					<img
						src={left}
						className="arrow-previous arrow"
						alt="left arrow icon"
					/>
				</Link>

				<Link to="/OverdriveOne">
					<img src={right} className="arrow-next arrow" alt="left arrow icon" />
				</Link>
			</React.Fragment>
		);
	}
}

export default React3D;
