import React, { useEffect, useState } from 'react'

export default function GenresInDb() {
    const [genres, setGenres] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/api/genres")
            .then(data => data.json())
            .then(data => {
                setGenres(data.data)
            })
    }, [])

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        {
                            genres.map(genero => {
                                return (
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
                                )
                            })
                        }
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