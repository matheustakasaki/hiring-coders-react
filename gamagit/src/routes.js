import React from 'react';

import { Route, Switch, BrowserRouter } from "react-router-dom"
import Repositories from './Pages/Repositories';
import Home from './Pages/Home';

export default function Rotas() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route component={Repositories} />
            </Switch>
        </BrowserRouter>
    );
}