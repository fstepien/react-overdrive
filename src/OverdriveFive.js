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
					<h2>Overdrive Properties</h2>
					<Overdrive id="overdrive-one" duration={1000} animationDelay={100}>
						<CenterImage>
							<img src={overdrive} alt="overdrive code" />
						</CenterImage>
					</Overdrive>
				</section>
				<Link to={'/OverdriveFour'}>
					<img
						src={left}
						className="arrow-previous arrow"
						alt="left arrow icon"
					/>
				</Link>
				<Link to="/Material">
					<img src={right} className="arrow-next arrow" alt="left arrow icon" />
				</Link>
			</React.Fragment>
		);
	}
}

export default OverdriveFive;

const CenterImage = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
	border: solid 3px white;
	padding: 30px;
`;
