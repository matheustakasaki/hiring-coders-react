import React from 'react';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Repositories from './Repositories';
import Home from './Home';

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact component={Home} />
                <Route path='/repositories' component={Repositories} />
            </Routes>
        </BrowserRouter>
    );
}