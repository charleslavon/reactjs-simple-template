import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './components/App';
import HomePage from './components/HomePage';
import NotFound from './components/NotFound';
import rootReducer from './reducers';
require('./favicon.ico');


const store = createStore(rootReducer);

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
      </Route>
      <Route path="*" component={NotFound}/>
    </Router>
  </Provider>, document.getElementById('app')
);
