import PropTypes from 'prop-types'
import { string } from 'prop-types'
export default function ContentRowMovies(props) {
    return (
        <>
            <div className="row">
                {
                    props.cajas.map((caja, index) => {
                        return (
                            <div key={index} className="col-md-4 mb-4">
                                <div className={`card ${caja.colorDeBorde} shadow h-100 py-2`}>
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className={`text-xs font-weight-bold text-${caja.colorDeBorde.split('-').slice(-1)} text-uppercase mb-1`}>{caja.titulo}</div>
                                                <div className="h5 mb-0 font-weight-bold text-gray-800">{caja.cifra}</div>
                                            </div>
                                            <div className="col-auto">
                                                <i className={`fas ${caja.icono} fa-2x text-gray-300`}></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

ContentRowMovies.propTypes = {
    cajas: PropTypes.arrayOf(PropTypes.shape({
        titulo: PropTypes.string.isRequired,
        colorDeBorde: PropTypes.oneOf(['border-left-primary', 'border-left-success', 'border-left-warning']).isRequired,
        cifra: PropTypes.number.isRequired,
        icono: string.isRequired
    }))
}
