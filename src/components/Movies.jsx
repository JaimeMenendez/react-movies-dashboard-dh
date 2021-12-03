import React from 'react'

function Movies(props) {
    return (
        <table className="table table-bordered bg-white shadow mt-3 ml-4 mr-3" style={{ maxWidth: '95%', margin: 'auto', marginBottom: "1rem" }}>
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
                {props.movies.map((movie, i) => {
                    return (
                        <tr key={'movie' + i}>
                            <th scope="row">{movie.title}</th>
                            <td>{movie.length}</td>
                            <td>{movie.rating}</td>
                            <td>
                                <ul>
                                   {movie.genre && movie.genre.name ?  movie.genre.name:''}
                                </ul>
                            </td>
                            <td>{movie.awards}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Movies
