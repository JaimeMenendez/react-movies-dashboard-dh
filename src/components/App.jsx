import Sidebar from "./Sidebar";
import ContentWrapper from "./ContentWrapper";
import React from 'react'
import {Route, Routes} from "react-router-dom";
import Movies from "./Movies";
import {useFetchData} from "../Hooks/UseFetchData";
import Error404 from "./Error404";
import GenresInDb from "./GenresInDb";
import LastMovieInDb from "./LastMovieInDb";

function App() {
    const [movies] = useFetchData("/api/movies", [])
    const [actors] = useFetchData("/api/actors", [])
    const [genres] = useFetchData("/api/genres", [])

    return (
        <div id="wrapper">
            <Sidebar/>
            <Routes>
                <Route path="/" element={<ContentWrapper genres={genres} movies={movies} actors={actors}/>}/>
                <Route path="/movies" element={<Movies movies={movies}/>}/>
                <Route path="/genres" element={<GenresInDb genres={genres}/>}/>
                <Route path="/lastmovie" element={<LastMovieInDb/>}/>
                <Route path="*" element={<Error404/>}/>
            </Routes>
        </div>
    );
}

export default App;
