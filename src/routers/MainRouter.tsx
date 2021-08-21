import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Main } from '../pages/main';
import { PeedList } from '../pages/peedList';



export const MainRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={PeedList}/>
            </Switch>
        </Router>
    )
}