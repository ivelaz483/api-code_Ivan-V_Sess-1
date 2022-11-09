import React from 'react'

import { useEffect, useState } from "react"
import SearchMovie from './searchbar.js'
import Movielist from './movielist'

const App4 = () => {
    const [movies, setMovies] = useState([])
    const [searchmovie, setSearchmovie] = useState('')
    const RequestMovie = async() => {
        const url = `https://www.omdbapi.com/?s=${searchmovie}&apikey=c967d94b`;
        const response = await fetch(url)
        const data = await response.json()
        console.log(data.Search)
        if(data.Search){
            setMovies(data.Search)
        }

    }

    useEffect(() => {
        RequestMovie(searchmovie)
    },[searchmovie])

    return (
        <div class="container-fluid">
        <div>
            <div>
                <SearchMovie searchmovie={searchmovie} setSearchmovie={setSearchmovie}/>
            </div>

            <div>
                <Movielist movies={movies} />
            </div>
        </div>
        </div>
    )
}

export default App4