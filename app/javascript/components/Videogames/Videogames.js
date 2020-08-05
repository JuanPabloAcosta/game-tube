import React, {useState, useEffect} from 'react'

const Videogames = () => {
    const [videogames, setVideogames] = useState([])

    useEffect(() => {
        const getData = async (url) =>{
            const response = await fetch(url,{
                method: "GET"
            })
            console.log(response)
            return await response.json()
        }
        const data = getData('/api/v1/videogames.json')
    })

/*  useEffect(() => {
    async function fetchData() {
        // You can await here
        const response = await MyAPI.getData(someId);
        // ...
    }
    fetchData();
    }, [someId]); */
    
    return(
        <div>Acá juegos melos</div>
    )
}

export default Videogames