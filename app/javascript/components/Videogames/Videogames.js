import React, {useState, useEffect, Fragment} from 'react'

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

    const list = videogames.map( game => {
        return (<li key={game.attributes.name}>{game.attributes.name}</li>)
    })

    return(
        <>
            <div className = "home">
                <div className = "navbar">
                    
                </div>
                <div className = "info-carrusel">
                        
                </div>
                <div className = "carrusel">
                    <ul>{list}</ul>
                </div>
            </div>
        </>
    )
}

export default Videogames