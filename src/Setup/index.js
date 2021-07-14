import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import TopAlbum from './TopAlbum';
import TopSong from './TopSongs'
import ErrorPage from './ErrorPage';

const ReactRouterSetup = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/topalbum'>
                    <TopAlbum />
                </Route>
                <Route path='/topsong'>
                    <TopSong />
                </Route>
                <Route path='*'>
                    <ErrorPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default ReactRouterSetup;
