import React, { Component } from 'react';
import styled from 'styled-components';
import { Poster } from './Movie';
import Overdrive from 'react-overdrive';
import { Link } from 'react-router-dom';
import left from './caret-square-left.svg';
import right from './caret-square-right.svg';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
	state = {
		movie: {}
	};

	async componentDidMount() {
		try {
			const res = await fetch(
				`https://api.themoviedb.org/3/movie/${
					this.props.match.params.id
				}?api_key=ab8356e075fc49f45bcecd2802a2c5dd`
			);
			const movie = await res.json();
			this.setState({
				movie
			});
		} catch (err) {
			console.log(`MovieDetail Error" ${err}`);
		}
	}

	render() {
		const { movie } = this.state;
		return (
			<MovieWrapper
				backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}
				alt={movie.title}
			>
				<MovieInfo>
					<Link to={`/MDB`}>
						<Overdrive id={`${movie.id}`} animationDelay={2}>
							<Poster
								src={`${POSTER_PATH}${movie.poster_path}`}
								alt={movie.title}
							/>
						</Overdrive>
					</Link>
					<div>
						<h1>{movie.title}</h1>
						<h3>{movie.release_date}</h3>
						<p>{movie.overview}</p>
					</div>
				</MovieInfo>
				<img
					src={left}
					className="arrow-previous arrow"
					onClick={this.previousSlide}
					alt="left arrow icon"
				/>{' '}
				<Link to={`/References`}>
					<img
						src={right}
						onClick={this.nextSlide}
						className="arrow-next arrow"
						alt="left arrow icon"
					/>
				</Link>
			</MovieWrapper>
		);
	}
}

export default MovieDetail;

const MovieWrapper = styled.div`
	position: relative;
	padding-top: 50vh;
	background: url(${props => props.backdrop}) no-repeat;
	background-size: cover;
	height: calc(100vh - 100px);
`;

const MovieInfo = styled.div`
	background: white;
	text-align: left;
	padding: 2rem 10%;
	display: flex;
	> div {
		margin-left: 20px;
	}
	img {
		position: relative;
		top: -5rem;
	}
`;
