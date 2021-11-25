import { v4 as id } from 'uuid';

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
                        <tr key={id()}>
                            <th key={id()} scope="row">{pelicula.titulo}</th>
                            <td key={id()}>{pelicula.duracion}</td>
                            <td key={id()}>{pelicula.rating}</td>
                            <td key={id()}>
                                {pelicula.generos.map((genero, i) => {
                                    return (
                                        <ul key={id()}>
                                            <li key={id()}>{genero}</li>
                                        </ul>
                                    )
                                })}
                            </td>
                            <td key={id()}>{pelicula.premios}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
