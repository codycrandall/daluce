import React from 'react'
import { Switch, Route, } from 'react-router-dom'

const Router = (props) => (
        <Switch>
            <Route exact={true} path='/' render={() =><div>hello world</div>} />
        </Switch>
)

export default Router;
