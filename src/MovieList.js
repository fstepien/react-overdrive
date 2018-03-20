import React, { Component } from 'react';
import Movie from './Movie';

class MoviesList extends Component {

  state = {
    movies: [] 
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=ab8356e075fc49f45bcecd2802a2c5dd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();
      console.log(movies)
      this.setState({
        movies: movies.results
      })
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    return (
        <div>
        {this.state.movies.map(movie=>(
              <Movie key={movie.id} movie={movie}/>))}   
        </div>      
    );
  }
}

export default MoviesList;

