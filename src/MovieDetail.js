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
	render() {
		const { movieId, movies } = this.props;

		const movieIndex = movies.findIndex(movie => movie.id === movieId);

		let movie = movies[movieIndex];

		return (
			<React.Fragment>
				<MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
					<MovieInfo>
						<Overdrive id={`${movie.id}`} animationDelay={200}>
							<Poster
								src={`${POSTER_PATH}${movie.poster_path}`}
								alt={movie.title}
								onClick={() => this.props.toggleView(movie.id)}
							/>
						</Overdrive>

						<div>
							<h1>{movie.title}</h1>
							<h3>{movie.release_date}</h3>
							<p>{movie.overview}</p>
						</div>
					</MovieInfo>
				</MovieWrapper>
				<Link to={'/Material'}>
					<img
						src={left}
						className="arrow-previous arrow"
						alt="left arrow icon"
					/>
				</Link>
				<Link to="/References">
					<img src={right} className="arrow-next arrow" alt="left arrow icon" />
				</Link>
			</React.Fragment>
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
