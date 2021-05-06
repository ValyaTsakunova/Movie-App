import React from 'react';
import { Button } from 'react-bootstrap';
import './MovieCard.css'

function MovieCard({movie}){
    return(
        <div className="card">
                <div className="movieTitle">{movie.title}</div>
                <div className="movieImage">
                <img src={movie.poster_path || ' '} ></img>
                </div>
                {/* <div className="genre">Genre: {movie.genres.join(', ')}</div> */}
                <div className="release">Release data: {movie.release_date}</div>
                <Button style={{ backgroundColor: '#800000', borderColor:'#4d0000'}}>Show more</Button>
        </div>
    )
}

export default MovieCard;