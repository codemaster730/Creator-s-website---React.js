import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Dashboard from '../views/Dashboard'

const Routes = () => (
    <Router >
        <Switch>
            <Route path="/" component={Dashboard} />
        </Switch>
    </Router>
)

export default Routes