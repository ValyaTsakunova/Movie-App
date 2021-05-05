import React from 'react';
import MovieCard from './MovieCard';
import {connect} from 'react-redux';
// import { useSelector } from 'react-redux';
import './Movies.css'

function Movies({movies}){
    return(
        <div className="movieContainer">
            {movies.map(movie => <MovieCard key={movie.id} movie={movie}></MovieCard>)}
        </div>
    )
}

export default connect()(Movies);