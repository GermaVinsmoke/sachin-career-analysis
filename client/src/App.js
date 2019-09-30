import React, { Component, Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Loading from './components/Loading';
import history from './history';

import lazyImport from './lazyImport';
const Home = lazyImport('./home/index.js');
const HistoryPage = lazyImport('./historyPage/index.js');
const Stats = lazyImport('./stats/index.js');
const Feedback = lazyImport('./feedback/index.js');

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/history">
              <HistoryPage />
            </Route>
            <Route exact path="/stats">
              <Stats />
            </Route>
            <Route exact path="/feedback">
              <Feedback />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default App;
