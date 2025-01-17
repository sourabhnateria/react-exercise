import React from 'react';
import './movie.css';

function MovieCard(props) {
    const { title, genre, year, imageUrl } = props;
    return (
        <div className="movie-card">
            <img src={imageUrl} alt={title} className="movie-image" />
            <div className="movie-details">
                <h2 className="movie-title">{title}</h2>
                <p className="movie-info">Genre: {genre}</p>
                <p className="movie-info">Year: {year}</p>
            </div>
        </div>
    );
}

export default MovieCard;