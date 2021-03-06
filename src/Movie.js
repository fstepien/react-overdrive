import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = ({ movie, toggleView }) => (
	<div>
		{/* <Link to={`MDB/${movie.id}`}> */}
		<Overdrive id={`${movie.id}`} duration={500} animationDelay={150}>
			<Poster
				src={`${POSTER_PATH}${movie.poster_path}`}
				alt={movie.title}
				onClick={() => toggleView(movie.id)}
			/>
		</Overdrive>
		{/* </Link> */}
	</div>
);

export default Movie;

Movie.propTypes = {
	movie: PropTypes.shape({
		title: PropTypes.string.isRequired
	}),
	desc: PropTypes.string
};

export const Poster = styled.img`
	box-shadow: 0 0 35px black;
`;
