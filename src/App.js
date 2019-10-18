import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Dog from './Dog'

export default function App() {
    return (
        <Switch>
        <Route exact path="/" component={Home} />
    <Route path="/:breed" component={Dog} />
    </Switch>
)
}




