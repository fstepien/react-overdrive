import React, { Component } from 'react';
import Overdrive from 'react-overdrive';

import { Link } from 'react-router-dom';
import left from './caret-square-left.svg';
import right from './caret-square-right.svg';
import reactImage2 from './React2.png';

class OverdriveTwo extends Component {
	render() {
		return (
			<React.Fragment>
				<section className="slide react">
					<h2>Switch Between Images</h2>
					<p>This is a new image</p>
					<div className="image">
						<Overdrive id="overdrive-one">
							<img src={reactImage2} alt="" />
						</Overdrive>
					</div>
				</section>
				<Link to={'/OverdriveOne'}>
					<img
						src={left}
						className="arrow-previous arrow"
						alt="left arrow icon"
					/>
				</Link>
				<Link to="/OverdriveThree">
					<img src={right} className="arrow-next arrow" alt="left arrow icon" />
				</Link>
			</React.Fragment>
		);
	}
}

export default OverdriveTwo;
