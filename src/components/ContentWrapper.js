import Footer from './Footer';
import ContentRowTop from './ContentRowTop';
import TopBar from './TopBar';
import TablaDePeliculas from "./TablaDePeliculas";

let peliculas = [
    {
        titulo: "El Padrino",
        duracion: "2 h",
        rating: "9.2",
        generos: ["Drama", "Crime", "Thriller"],
        premios: 5
    },{
        titulo:"Titanic",
        duracion: "3 h",
        rating: "9.2",
        generos: ["Drama", "Romance", "Thriller"],
        premios: 5
    }
]

export default function ContentWrapper() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <TopBar />
                <ContentRowTop />
                <TablaDePeliculas peliculas={peliculas}/>
                <Footer />
            </div>
        </div>
    )
}