import Footer from './Footer';
import ContentRowTop from './ContentRowTop';
import TopBar from './TopBar';
import Movies from "./Movies";
import React from "react"
import {useFetchData} from "../Hooks/UseFetchData";


export default function ContentWrapper() {
    const [movies] = useFetchData("/api/movies",[])

    const [actors] = useFetchData("/api/actors",[])
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <TopBar />
                <ContentRowTop peliculas={movies} actores={actors} />
                <Movies peliculas={movies} />
                <Footer />
            </div>
        </div>
    )
}