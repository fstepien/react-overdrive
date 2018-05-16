import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Movie from './Movie';
import MovieContext from './MovieData';
import MovieProvider from './MovieApi';

class MoviesList extends PureComponent {
	state = {
		movies: []
	};

	async componentDidMount() {
		try {
			const res = await fetch(
				'https://api.themoviedb.org/3/discover/movie?api_key=ab8356e075fc49f45bcecd2802a2c5dd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
			);
			const movies = await res.json();
			// console.log(JSON.stringify(movies));
			this.setState({
				movies: movies.results
			});
		} catch (err) {
			console.log(`MovieList Error" ${err}`);
		}
	}

	render() {
		return (
			<MovieGrid>
				<MovieProvider>
					<MovieContext.Consumer>
						{context => (
							<p style={{ color: 'white' }}>
								{/* I'm inside {context.state.movie.total_pages} */}
								{/* {context.state.movie.results.map(movie => (
									<Movie key={movie.id} movie={movie} />
								))} */}
							</p>
						)}
					</MovieContext.Consumer>
				</MovieProvider>

				{this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
			</MovieGrid>
		);
	}
}

export default MoviesList;

const MovieGrid = styled.div`
	display: grid;
	padding: 1rem;
	grid-template-columns: repeat(auto-fit, minmax(179px, 1fr));
	grid-row-gap: 25px;
`;
