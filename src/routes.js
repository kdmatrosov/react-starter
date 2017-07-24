import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './components/app'
import Index from './containers/index'
import PhotoIndex from './containers/photo/photo_index'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Index} />
    <Route path='photographers' component={PhotoIndex} />
  </Route>
)
