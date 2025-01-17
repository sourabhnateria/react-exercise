import React from 'react';
import MovieCard from './movie_card';

function MovieList (){
    const movies = [
    {
        title:'Gadar',
        genre:'thriller',
        year :2001,
        imageUrl :'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTG2t449dQ0IMNEYiUC9xCABapGBOv31GSR44YgMJefUnozrPgU',

    },
    {
        title:'ddlj',
        genre:'romantic thriller',
        year :1995,
        imageUrl :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFsQa8EcnB4W2gdO0bEh5HQnu1Y4knPPWvaUdI5zUrik_R-vD5',

    },
    {
        title:'sonu ke titu ki sweety',
        genre:'romantic ',
        year :2018,
        imageUrl :'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRR0Kl1axvARCLpdwW4_xvarXIo8RxQf5BwEm2ACjtwFMXjKN2W',

    }
];

return(
    <div>
    <h1>popular movies</h1>
    <div className = "movie-list">
        {movies.map((movie,index) =>(
        <MovieCard key = {index}{...movie}/>
))}
        </div></div>
);
}

export default MovieList ;