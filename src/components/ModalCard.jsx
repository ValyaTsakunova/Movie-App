import React from 'react';
import { Modal } from 'react-bootstrap';
import '../assets/styles/ModalCard.css';

function ModalCard({ movie, show, setShow }) {
    const handleClose = () => setShow(false);
    return (
        <Modal show={show} onHide={handleClose} className="modalWindow">
            <Modal.Header closeButton className="modalHeader" >
                <Modal.Title className="modalTitle" style={{ fontSize: '40px' }}>{movie.title}</Modal.Title>
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
    )
}

export default ModalCard;
