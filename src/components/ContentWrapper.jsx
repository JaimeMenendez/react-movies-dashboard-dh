import Footer from './Footer';
import ContentRowTop from './ContentRowTop';
import TopBar from './TopBar';
import Movies from "./Movies";
import React from "react"


export default function ContentWrapper(props) {

    return (
        <div id="container">
                <TopBar />
                <ContentRowTop genres={props.genres} peliculas={props.movies} actores={props.actors} />
                <Movies movies={props.movies} />
                <Footer />
        </div>
    )
}