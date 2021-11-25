import GenresInDb from "./GenresInDb";
import LastMovieInDb from "./LastMovieInDb";
import ContentRowMovies from "./ContentRowMovies";

let cajasDePeliculas = [{
    titulo: 'Movies in Database',
    colorDeBorde: 'border-left-primary',
    cifra: 21,
    icono: 'fas fa-film'
}, {
    titulo: 'Total Awards',
    colorDeBorde: 'border-left-success',
    cifra: 79,
    icono: 'fas fa-award'
}, {
    titulo: 'Movies in Database',
    colorDeBorde: 'border-left-warning',
    cifra: 49,
    icono: 'fas fa-user'
}]

export default function ContentRowTop() {
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

            <ContentRowMovies cajas={cajasDePeliculas} />

            <div className="row">
                <LastMovieInDb />
                <GenresInDb />
            </div>
        </div>
    )
}