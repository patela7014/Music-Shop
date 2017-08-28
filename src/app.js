import React from 'react';
import {render} from 'react-dom'
import {Provider} from 'react-redux';
import SideBar from './components/sideBar';
import MusicPlayer from './components/musicPlayer';

import {applyMiddleware, createStore} from 'redux';

import reducers from './reducers/index';

import logger from 'redux-logger';

const middleware = applyMiddleware(logger);

// create the store
const store = createStore(reducers, middleware);

import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'

const customHistory = createBrowserHistory()

import AlbumList from './components/albumList';
export const routes = (
    <Provider store={store}>
        <Router history={customHistory}>
            <div>
                <Route exact path="/" component={AlbumList}/>
                <Route exact path="/albums" component={SideBar}/>
                <Route exact path="/player" component={MusicPlayer}/>
            </div>
        </Router>
    </Provider>
);
render(
    routes , document.getElementById('app')
);




