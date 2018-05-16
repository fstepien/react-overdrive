import React, { Component } from 'react';
import Overdrive from 'react-overdrive';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import left from './caret-square-left.svg';
import right from './caret-square-right.svg';
import material1 from './material1.gif';
import material2 from './material2.gif';
import material3 from './material3.gif';

class OverdriveFour extends Component {
	render() {
		return (
			<React.Fragment>
				<section className="slide react">
					<h2>MATERIAL DESIGN</h2>

					<MatP>
						Motion guides user attention in a smooth, unbroken fashion.
					</MatP>
					<MatP>
						Motion helps orient users by showing how elements are related.
					</MatP>
					<MatP>
						Motion celebrates moments in user journeys, adds character to common
						interactions, and expresses a brand’s personality and style.
					</MatP>

					<Overdrive id="overdrive-one">
						<ImageH>
							<div>
								<Image src={material1} alt="" />
							</div>

							<Image src={material2} alt="" />

							<div>
								<Image src={material3} alt="" />
							</div>
						</ImageH>
					</Overdrive>
				</section>
				<Link to={'/OverdriveFive'}>
					<img
						src={left}
						className="arrow-previous arrow"
						alt="left arrow icon"
					/>
				</Link>
				<Link to="/MDB">
					<img src={right} className="arrow-next arrow" alt="left arrow icon" />
				</Link>
			</React.Fragment>
		);
	}
}

export default OverdriveFour;

const ImageH = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	border: solid 3px white;
	padding: 20px;
	width: 100%;
`;

const Image = styled.img`
	height: 300px;
`;

const MatP = styled.p`
	margin-bottom: 1.5rem !important;
`;
