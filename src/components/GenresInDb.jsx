import React from 'react'
import {useFetchData} from "../Hooks/UseFetchData";

function GenresInDb() {
    const [genres] = useFetchData("/api/genres",[])

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        {genres.map(genero => {
                            return genero.active ? (
                                <div key={genero.id} className="col-lg-6 mb-4" >
                                    <div className="card bg-dark text-white shadow">
                                        <div className="card-body"
                                            onMouseEnter={toggleBackground}
                                            onMouseLeave={toggleBackground}
                                        >
                                            {genero.name}
                                        </div>
                                    </div>
                                </div>
                            ) : null
                        })}
                    </div>
                </div>
            </div>
        </div>)
}

/**
* @param{MouseEvent} event
*/
function toggleBackground(event) {
    event.target.classList.toggle("bg-secondary")
}


export default GenresInDb