import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Main } from '../pages/main';
import { PeedDetail } from '../pages/peedDetail';
import { PeedList } from '../pages/peedList';



export const MainRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={PeedList}/>
                <Route path="/detail" exact component={PeedDetail}/>
            </Switch>
        </Router>
    )
}