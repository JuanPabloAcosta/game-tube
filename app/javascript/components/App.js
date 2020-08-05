import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Videogame from './Videogame/Videogame'
import Videogames from './Videogames/Videogames'

const App = () => {
    return (
        <Switch>
            <Route exact path = "/" component = {Videogames}/>
            <Route exact path = "/videogames/:slug" component = {Videogame}/>
        </Switch>
    )
}

export default App