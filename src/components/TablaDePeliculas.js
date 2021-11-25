export default function TablaDePeliculas(props) {
    return (
        <table className="table table-bordered bg-white m-auto shadow" style={{ maxWidth: '95%' }}>
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
                            <th key={pelicula.titulo + i} scope="row">{pelicula.titulo}</th>
                            <td key={pelicula.titulo + pelicula.duracion + i}>{pelicula.duracion}</td>
                            <td key={pelicula.titulo + pelicula.rating + i}>{pelicula.rating}</td>
                            <td key={pelicula.titulo + pelicula.generos.toString() + i}>
                                <ul key={pelicula.generos.toString() + i}>
                                    {pelicula.generos.map((genero, i) => {
                                        return (

                                            <li key={genero + i}>{genero}</li>
                                        )
                                    })}
                                </ul>
                            </td>
                            <td key={pelicula.premios+i}>{pelicula.premios}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
