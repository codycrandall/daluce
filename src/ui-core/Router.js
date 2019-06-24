import React from 'react'
import { Switch, Route, } from 'react-router-dom'
import Header from './components/Header';

const Router = () => (
    <Switch>
        <Route path='/' render={() => <Header />} />
    </Switch>
)

export default Router;
