import React, { Component } from 'react';
import Overdrive from 'react-overdrive';

import { Link } from 'react-router-dom';
import left from './caret-square-left.svg';
import right from './caret-square-right.svg';
import pack from './pack.png';
import reactImage from './React.png';

class OverdriveOne extends Component {
	render() {
		return (
			<React.Fragment>
				<section className="slide react">
					<h2>React-Overdrive</h2>
					<p>New Page, Same Image ......100ms seconds away from being true</p>

					<div className="image">
						<Overdrive id="overdrive-one">
							<img src={reactImage} alt="" />
						</Overdrive>
					</div>
				</section>
				<Link to={'/React3D'}>
					<img
						src={left}
						className="arrow-previous arrow"
						alt="left arrow icon"
					/>
				</Link>
				<Link to="/OverdriveTwo">
					<img src={right} className="arrow-next arrow" alt="left arrow icon" />
				</Link>
			</React.Fragment>
		);
	}
}

export default OverdriveOne;
