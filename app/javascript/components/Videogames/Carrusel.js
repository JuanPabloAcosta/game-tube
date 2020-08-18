import React from 'react'

const Carrusel = (props) => {
    return(
        <div className = "carrusel">
            <ul className = "imag">{props.images}</ul>
        </div>
    )
}

export default Carrusel