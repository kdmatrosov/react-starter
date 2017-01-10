import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './components/app'
import Test from './containers/test'
import PhotoIndex from './containers/photo/photo_index'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Test} />
    <Route path='photographers' component={PhotoIndex} />
  </Route>
)
