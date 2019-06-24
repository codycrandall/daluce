import React from 'react'
import { Switch, Route, } from 'react-router-dom';

const Router = (props) => (
    <main>
        <Switch>
            <Route exact={true} path='/' render={() => <MainMenu/>} />
        </Switch>
    </main>
)

export default Router;
