export default function TablaDePeliculas(props) {
    return (
        <table class="table table-bordered bg-white m-auto shadow" style={{ maxWidth: '95%' }}>
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
                        <tr key={i + pelicula.titulo}>
                            <th scope="row">{pelicula.titulo}</th>
                            <td>{pelicula.duracion}</td>
                            <td>{pelicula.rating}</td>
                            <td>{pelicula.generos.map((genero, i) => {
                                return (
                                    <ul>
                                        <li key={i}>{genero}</li>
                                    </ul>
                                )
                            })}</td>
                            <td>{pelicula.premios}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}