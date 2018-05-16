import React, { Component } from 'react';
import Overdrive from 'react-overdrive';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import left from './caret-square-left.svg';
import right from './caret-square-right.svg';
import overdrive from './overdrive.png';

class OverdriveFive extends Component {
	render() {
		return (
			<React.Fragment>
				<section className="slide react">
					<h2>React-Overdrive</h2>

					<div className="image">
						<Overdrive id="overdrive-one" duration={1000} animationDelay={100}>
							<img src={overdrive} alt="overdrive code" />
						</Overdrive>
					</div>
				</section>
				<Link to={'/OverdriveFour'}>
					<img
						src={left}
						className="arrow-previous arrow"
						alt="left arrow icon"
					/>
				</Link>
				<Link to="/OverdriveSix">
					<img src={right} className="arrow-next arrow" alt="left arrow icon" />
				</Link>
			</React.Fragment>
		);
	}
}

export default OverdriveFive;

const OverdriveDiv = styled.div`
	background: white;
	width: 400px;
	height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 40px;
	float: right;
`;
