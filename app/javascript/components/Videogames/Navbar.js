import React, { useState, useEffect } from 'react'
import moment from "moment";

const Navbar = () => {
    
    const [value, setValue] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()),1000)

        return () => {
            clearInterval(interval)
        } 
    })

    const d = moment.duration(value, "milliseconds");
    const hours = Math.floor(d.hours()) - 5;
    const mins = Math.floor(d.minutes());
    const time = `${hours}:${mins}`;
    
    return(
        <div className = "navbar">
            <div>
                <div>{time}</div>
                <div id="wifi"></div>
                <div id="moneda"></div>
            </div>
            <div>
                <div id="desconocido"></div>
            </div>
            <div>
                <div id="campana"></div>
                <div id="usuario"></div>
                <div id="camaraderia"></div>
            </div>
        </div>
    )
}

export default Navbar