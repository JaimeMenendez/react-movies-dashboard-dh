import Footer from './Footer';
import ContentRowTop from './ContentRowTop';
import TopBar from './TopBar';
import Movies from "./Movies";
import React,{useState,useEffect} from 'react'


export default function ContentWrapper() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetch("http://localhost:3001/api/movies")
        .then(data => data.json())
        .then(data => {
            setMovies(data.data)
        })
    }, [])

    const [actors, setActors] = useState([])
    useEffect(() => {
        fetch("http://localhost:3001/api/actors")
        .then(data => data.json())
        .then(data => {
            setActors(data.data)
        })
    }, [])

    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <TopBar />
                <ContentRowTop peliculas={movies} actores={actors} />
                <Movies peliculas={movies}/>
                <Footer />
            </div>
        </div>
    )
}