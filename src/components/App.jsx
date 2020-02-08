import React from 'react';
import { Router , Switch , Route } from 'react-router-dom'
import { createBrowserHistrory } from 'history'


import Posts from './posts/Posts'
import SinglePost from './single-post/SinglePost'

export default function App() {
    return (
        <Router history={createBrowserHistrory}>
            <Switch>
                <Route path='/'exact component={Posts}/>
                <Route path='/:id' component={SinglePost}/>
            </Switch>
        </Router>
    )
}