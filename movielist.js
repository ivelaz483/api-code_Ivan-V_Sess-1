import React from 'react'

const MovieList = (props) => {
    return (
        <>
        {props.movies.map((movie,index) => (
            <figure class="figure" >
            <img src={movie.Poster} class="figure-img img-fluid rounded" alt="figure-img"></img>
            <figcaption class="figure-caption">{movie.Title}<br/>
            <small>{movie.Year}</small></figcaption>
          </figure>
        ))}
        </>
    )
}

export default MovieList

/*<div>
<img src={movie.Poster} alt="movies"/>
</div>*/