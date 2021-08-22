import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Main } from '../pages/main';
import { PeedDetail } from '../pages/peedDetail';
import { PeedList } from '../pages/peedList';
import { Profile } from '../pages/profile';
import { Navigator, Screen } from 'karrotframe';


export const MainRouter:React.FC = () => {
    return (
        <Navigator theme='Cupertino'>
            <Screen path='/detail' component={PeedDetail}/>
            <Screen path='/profile' component={Profile}/>
            <Screen path='/' component={PeedList}/>
        </Navigator>
    )
}