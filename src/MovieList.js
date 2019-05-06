import React from 'react';

import { Link } from 'react-router-dom';

// const arrayOfMovies = [
//     "Avengers: Endgame",
//     "The Curse Of La Llorona",
//     "Breakthrough",
//     "Little"
// ];

function MovieList({movies, match}) {
    // const movieLink = arrayOfMovies.map((movie, i) => (
    //     <li key={i}>
    //         <Link to={`${props.match.path}/${movie}`}>{movie}</Link>
    //     </li>
    // ));

    const movieLink = movies.map((movie, i) => (
        <li key={i}>
            <Link to={`${match.path}/${movie}`}>{movie}</Link>
        </li>
    ))

    return (
        <div>
            <ul>
                {movieLink}
            </ul>
        </div>
    )
}

export default MovieList;