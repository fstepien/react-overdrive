import React, { Component } from 'react';
import Overdrive from 'react-overdrive';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import left from './caret-square-left.svg';
import right from './caret-square-right.svg';
import pack from './pack.png';
import reactImage2 from './React2.png';

class OverdriveThree extends Component {
	render() {
		return (
			<React.Fragment>
				<section className="slide react">
					<h2>Apply on All Elements</h2>
					<div className="know">
						<p>I don't know how overdrive is doing this.</p>
						<p>And you don't need to either!</p>
					</div>
					<div className="image">
						<Overdrive id="overdrive-one">
							<OverdriveDiv>
								<p style={{ color: '#222' }}>I am now a div</p>
							</OverdriveDiv>
						</Overdrive>
					</div>
				</section>
				<Link to={'/OverdriveTwo'}>
					<img
						src={left}
						className="arrow-previous arrow"
						alt="left arrow icon"
					/>
				</Link>
				<Link to="/OverdriveFour">
					<img src={right} className="arrow-next arrow" alt="left arrow icon" />
				</Link>
			</React.Fragment>
		);
	}
}

export default OverdriveThree;

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
