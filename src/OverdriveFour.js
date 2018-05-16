import React, { Component } from 'react';
import Overdrive from 'react-overdrive';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import left from './caret-square-left.svg';
import right from './caret-square-right.svg';
import install from './use-install.png';
import useimport from './use-import.png';
import apply from './use-apply.png';

class OverdriveFour extends Component {
	render() {
		return (
			<React.Fragment>
				<section className="slide react">
					<h2>React-Overdrive</h2>
					<Overdrive id="overdrive-one">
						<ImageStack>
							<div>
								<img src={install} alt="" />
							</div>
							<ImageNotAligned>
								<img src={useimport} alt="" />
							</ImageNotAligned>
							<div>
								<img src={apply} alt="" />
							</div>
						</ImageStack>
					</Overdrive>
				</section>
				<Link to={'/OverdriveTwo'}>
					<img
						src={left}
						className="arrow-previous arrow"
						alt="left arrow icon"
					/>
				</Link>
				<Link to="/OverdriveFive">
					<img src={right} className="arrow-next arrow" alt="left arrow icon" />
				</Link>
			</React.Fragment>
		);
	}
}

export default OverdriveFour;

const ImageStack = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: left;
	border: solid 3px white;
	padding: 20px;
	max-width: 500px;
`;

const ImageNotAligned = styled.div`
	padding-left: 10px;
`;
