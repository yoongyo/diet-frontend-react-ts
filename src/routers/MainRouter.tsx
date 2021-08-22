import React from 'react';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import { Main } from '../pages/main';
import { PeedDetail } from '../pages/peedDetail';
import { PeedList } from '../pages/peedList';
// import { Profile } from '../pages/profile';
import { Navigator, Screen} from 'karrotframe';


export const MainRouter:React.FC = () => {
    return (
        <Navigator 
            theme='Cupertino'
            onDepthChange={() => console.log("fuck")}
        >
            <Screen path='/'>
                <PeedList/>
            </Screen>
            <Screen path='/detail' >
                <PeedDetail/>
            </Screen>
            
        </Navigator>
    )
}