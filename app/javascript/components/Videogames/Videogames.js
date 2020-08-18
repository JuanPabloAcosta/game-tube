import React, {useState, useEffect, Fragment} from 'react'
import Videogame from './Videogame'
import Navbar from './Navbar'
import InfoCarrusel from './InfoCarrusel'
import Carrusel from './Carrusel'

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
        <div className = "home">
            <Navbar/>
            <InfoCarrusel/>
            <Carrusel images = {grid} />
        </div>
    )
}

export default Videogames