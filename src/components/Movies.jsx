import React from 'react'

function Movies(props) {
    return (
        <table className="table table-bordered bg-white shadow" style={{ maxWidth: '95%', margin: 'auto', marginBottom: "1rem" }}>
            <thead>
                <tr>
                    <th scope="col">Título</th>
                    <th scope="col">Duración</th>
                    <th scope="col">Rating</th>
                    <th scope="col">Géneros</th>
                    <th scope="col">Premios</th>
                </tr>
            </thead>
            <tbody>
                {props.peliculas.map((pelicula, i) => {
                    return (
                        <tr key={'pelicula' + i}>
                            <th scope="row">{pelicula.title}</th>
                            <td>{pelicula.length}</td>
                            <td>{pelicula.rating}</td>
                            <td>
                                <ul>
                                   {pelicula.genre && pelicula.genre.name ?  pelicula.genre.name:''}
                                </ul>
                            </td>
                            <td>{pelicula.awards}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Movies
