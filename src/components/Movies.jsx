import React from 'react';
import MovieCard from './MovieCard';
import '../assets/styles/Movies.css'

function Movies({ movies }) {
    return (
        <>
            <div className="movieCount">Found {movies.length} movies</div>
            <div className="movieContainer">
                {movies.map(movie => <MovieCard key={movie.id} movie={movie}></MovieCard>)}
            </div>
        </>
    )
}

export default Movies;
