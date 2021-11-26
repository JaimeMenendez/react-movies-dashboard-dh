export default function TablaDePeliculas(props) {
    return (
        <table className="table table-bordered bg-white shadow" style={{maxWidth: '95%', margin: 'auto', marginBottom: "1rem"}}>
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
                            <th scope="row">{pelicula.titulo}</th>
                            <td>{pelicula.duracion}</td>
                            <td>{pelicula.rating}</td>
                            <td>
                                <ul>
                                    {pelicula.generos.map((genero, i) => {
                                        return (

                                            <li key={genero + i}>{genero}</li>
                                        )
                                    })}
                                </ul>
                            </td>
                            <td>{pelicula.premios}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
