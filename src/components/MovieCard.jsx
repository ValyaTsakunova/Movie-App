import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
// import { Route, Link } from 'react-router-dom';
import './MovieCard.css';

function MovieCard({movie}){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [loaded, setLoaded] = useState(false);
 
    return(
        <>
        <div className="card">
                <div className="movieTitle">{movie.title}</div>
                <div className="movieImage">
                {loaded ? null : (<div className="defaultImg"/>)}
                <img src={movie.poster_path} style={loaded ? {} : { display: 'none' }} onLoad={() => setLoaded(true)}/>
                </div>
                <div className="genre">Genre: {movie.genres.join(', ')}</div>
                <div className="release">Release data: {movie.release_date}</div>
                <Button style={{ backgroundColor: '#800000', borderColor:'#4d0000'}} onClick={handleShow}>Show more</Button>
        </div>
        <Modal  show={show} onHide={handleClose} className="modalWindow">
                <Modal.Header closeButton className="modalHeader" >
                    <Modal.Title className="modalTitle" style={{fontSize: '40px'}}>{movie.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBody">
                    <p>{movie.overview}</p>
                    <p>Genre: {movie.genres.join(', ')}</p>
                    <p>Budget: {movie.budget}$</p>
                    <p>{movie.runtime} min</p>
                </Modal.Body>
                <Modal.Footer className="modalFooter">
                    Rating: {movie.vote_average}
                </Modal.Footer>
            </Modal> 
        </>
    )
}

export default MovieCard;