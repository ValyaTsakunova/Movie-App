import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import  ModalCard  from './ModalCard'
import './MovieCard.css';

function MovieCard({movie}){
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    const [loaded, setLoaded] = useState(false);
 
    return(
        <>
        <div className="card">
                <div className="movieTitle">{movie.title}</div>
                <div className="movieImage">
                {loaded ? null : (<div className="defaultImg"/>)}
                <img src={movie.poster_path} style={loaded ? {} : { display: 'none' }} onLoad={() => setLoaded(true)} />
                </div>
                <div className="genre">Genre: {movie.genres.join(', ')}</div>
                <div className="release">Release data: {movie.release_date}</div>
                <Button style={{ backgroundColor: '#800000', borderColor:'#4d0000'}} onClick={handleShow}><Link to={`/movie/${movie.id}`} className="showMore">Show more</Link></Button>
        </div>
        <Route path={`/movie/${movie.id}`} strict>
            <ModalCard movie={movie} show={show} setShow={setShow}/>
        </Route>
        </>
    )
}

export default MovieCard;