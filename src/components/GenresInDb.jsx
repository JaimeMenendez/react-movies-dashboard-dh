import React from 'react'
import {useFetchData} from "../Hooks/UseFetchData";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

function GenresInDb(props) {
    return (
        <div className="col-lg-6 mb-4 container mt-3">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        {props.genres.map(genero => {
                            return genero.active ? (
                                <Link className="col-lg-6 mb-4 text-decoration-none" to={"/genre/" + genero.id}
                                      key={genero.id}>
                                    <div className="card bg-dark text-white shadow">
                                        <div className="card-body"
                                             onMouseEnter={toggleBackground}
                                             onMouseLeave={toggleBackground}
                                        >
                                            {genero.name}
                                        </div>
                                    </div>
                                </Link>
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

GenresInDb.defaultProps = {
    genres : []
}


export default GenresInDb