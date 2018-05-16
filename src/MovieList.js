import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Movie from './Movie';

import MovieDetail from './MovieDetail';
import left from './caret-square-left.svg';
import right from './caret-square-right.svg';

class MoviesList extends PureComponent {
	constructor() {
		super();
		this.state = {
			movies: [],
			list: true,
			movie: ''
		};
		this.toggleView = this.toggleView.bind(this);
	}

	async componentDidMount() {
		try {
			const res = await fetch(
				'https://api.themoviedb.org/3/discover/movie?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
			);
			const movies = await res.json();
			this.setState({
				movies: movies.results
			});
		} catch (e) {
			console.log(e);
		}
	}

	toggleView(movieId) {
		this.setState({ movie: movieId, list: !this.state.list });
	}

	render() {
		if (this.state.list) {
			return (
				<React.Fragment>
					<MovieGrid>
						{this.state.movies.map(movie => (
							<Movie
								key={movie.id}
								movie={movie}
								toggleView={this.toggleView}
							/>
						))}
					</MovieGrid>

					<Link to={'/Material'}>
						<img
							src={left}
							className="arrow-previous arrow"
							alt="left arrow icon"
						/>
					</Link>
					<Link to="/References">
						<img
							src={right}
							className="arrow-next arrow"
							alt="left arrow icon"
						/>
					</Link>
				</React.Fragment>
			);
		}
		if (!this.state.list) {
			return (
				<MovieDetail
					movies={this.state.movies}
					movieId={this.state.movie}
					toggleView={this.toggleView}
				/>
			);
		}
	}
}

export default MoviesList;

const MovieGrid = styled.div`
	display: grid;
	padding: 1rem;
	grid-template-columns: repeat(auto-fit, minmax(179px, 1fr));
	grid-row-gap: 25px;
`;
