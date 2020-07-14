import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import CardsCrud from '../components/user/CardsCrud'

export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/cards' component={CardsCrud} />
        <Redirect from='*' to='/' />
    </Switch>