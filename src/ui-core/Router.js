import React from 'react'
import { Route } from 'react-router-dom'
import Header from './components/Header';
import Landing from './components/Landing';

const Router = () => (
    <div>
        <Header />
        <Route exact={true} path='/' component={Landing} />
    </div>
)

export default Router;
