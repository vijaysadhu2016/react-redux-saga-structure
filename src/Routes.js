import React from 'react';
import {Router, Route, Switch, Redirect} from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import Home from './container/Home';
import PageNoteFound from './container/pageNotFound';

const history = createHistory({basename: ""});

class Routes extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/(|home)" render={() => <Home/>}/>

                    {/* 404 page */}
                    <Route path="/404" component={PageNoteFound}/>
                    <Redirect to="/404"/>
                </Switch>
            </Router>
        );
    }
}

export default Routes;
