import GenresInDb from "./GenresInDb";
import LastMovieInDb from "./LastMovieInDb";
import ContentRowMovies from "./ContentRowMovies";
import PropTypes from 'prop-types'; // ES6
import React from 'react'
/**
 * @param {{peliculas: array, actores: array}} props 
 */
function ContentRowTop(props) {
    let cajasDePeliculas = [{
        titulo: 'Movies in Database',
        colorDeBorde: 'border-left-primary',
        cifra: props.peliculas.length,
        icono: 'fas fa-film'
    }, {
        titulo: 'Total Awards',
        colorDeBorde: 'border-left-secondary',
        cifra: props.peliculas.reduce((a,p)=> a + p.awards, 0),
        icono: 'fas fa-award'
    }, {
        titulo: 'Actors Quantity',
        colorDeBorde: 'border-left-warning',
        cifra: props.actores.length,
        icono: 'fas fa-user'
    }]

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

            <ContentRowMovies cajas={cajasDePeliculas} />

            <div className="row">np
                <LastMovieInDb />
                <GenresInDb genres={props.genres}/>
            </div>
        </div>
    )
}

ContentRowTop.propTypes = {
    peliculas: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        rating: PropTypes.string,
        length: PropTypes.number,
        awards: PropTypes.number,
        genre: PropTypes.shape({
            name: PropTypes.string
        })
    })),
    actores: PropTypes.array
}

ContentRowTop.defaultProps = {
    peliculas: [],
    actores: []
}

export default ContentRowTop;