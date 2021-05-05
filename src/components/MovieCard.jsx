import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './MovieCard.css'

function MovieCard({movie}){
    return(
        <Card>
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                <img src={movie.poster_path || ' '} ></img>
                </Card.Text>
                <Card.Text>{movie.genres[0]}</Card.Text>
                <Card.Text>{movie.release_date.slice(0,4)}</Card.Text>
                <Button variant="primary">Show more</Button>
            </Card.Body>
        </Card>
    )
}

export default MovieCard;