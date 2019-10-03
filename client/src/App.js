import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loading from './components/Loading';

import lazyImport from './lazyImport';
const Home = lazyImport('./home/index.js');
const HistoryPage = lazyImport('./historyPage/index.js');
const Stats = lazyImport('./stats/index.js');
const Feedback = lazyImport('./feedback/index.js');
const ErrorComp = lazyImport('./Error.jsx');

class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/history">
              <HistoryPage />
            </Route>
            <Route path="/stats">
              <Stats />
            </Route>
            <Route path="/feedback">
              <Feedback />
            </Route>
            <Route>
              <ErrorComp />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default App;
