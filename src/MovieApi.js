import React, { Component } from 'react';
import MovieContext from './MovieData';

class MovieProvider extends Component {
	constructor() {
		super();
		this.state = {
			movie: []
		};
	}

	async componentWillMount() {
		try {
			const res = await fetch(
				'https://api.themoviedb.org/3/discover/movie?api_key=ab8356e075fc49f45bcecd2802a2c5dd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
			);
			const movie = await res.json();
			this.setState({
				movie
			});
		} catch (err) {
			console.log(`MOVIE API Error" ${err}`);
		}
	}
	render() {
		return (
			<MovieContext.Provider value={{ state: this.state }}>
				{this.props.children}
			</MovieContext.Provider>
		);
	}
}

export default MovieProvider;
