import React, {useState, useEffect, Fragment} from 'react'
import Videogame from './Videogame'

const Videogames = () => {
    const [videogames, setVideogames] = useState([])

    useEffect(() => {
        const getData = async (url) =>{
            const response = await fetch(url,{
                method: "GET",
                headers: { 'Content-Type': 'application/json' }
            })
            return await response.json()
        }
        
        (async () => {
            const data = await getData('/api/v1/videogames.json')
            setVideogames(data.data)
        })()

    }, [videogames.length]) 

    const grid = videogames.map( game => {
        return (
            <Videogame 
                key = {game.attributes.name} 
                attributes = {game.attributes}
            />)
    })

    return(
        <>
            <div className = "home">
                <div className = "navbar">
                    <div>
                        <div>Hora: 08:38 am</div>
                        <div>Hora: 08:38 am</div>
                    </div>
                    <div>
                        <div>Hora: 08:38 am</div>
                        <div>Hora: 08:38 am</div>
                    </div>
                    <div>
                        <div>Hora: 08:38 am</div>
                        <div>Hora: 08:38 am</div>
                    </div>
                </div>
                <div className = "info-carrusel">
                        <div className = "subnavbar">
                            <button>Title</button>
                            <button>Title</button>
                            <button>Title</button>
                            <button>Title</button>
                            <button>Title</button>
                            <button>Title</button>
                            <button>Title</button>
                        </div>
                        <div>
                            Description
                        </div>
                </div>
                <div className = "carrusel">
                    <ul>{grid}</ul>
                </div>
            </div>
        </>
    )
}

export default Videogames