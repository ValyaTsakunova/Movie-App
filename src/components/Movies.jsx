import React from 'react';
import MovieCard from './MovieCard';
import './Movies.css'

function Movies({movies}){
    // debugger;
    return(
        <div className="movieContainer">
            {movies.map(movie => <MovieCard key={movie.id} movie={movie}></MovieCard>)}
        </div>
    )
}

export default Movies;
