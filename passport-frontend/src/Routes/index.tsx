import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Register from '../components/Auth/Register'

const Routes: React.SFC = props => {
    return (
        <Switch>
            <Route exact path='/user/register' component={Register} />
        </Switch>
    )
}

export default Routes