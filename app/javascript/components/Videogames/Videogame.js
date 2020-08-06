import React from 'react'

const Videogame = (props) => {
    return(
        <div className = "card">
            <div className = "game-logo">
                <img src = {props.attributes.image_url} alt = {props.attributes.name}/>
            </div>
        </div>
    )
}

export default Videogame