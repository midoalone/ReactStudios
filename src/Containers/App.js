import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import Root from './Root'
import createStore from '../Redux'
import './styles/App.scss'
import { hot } from 'react-hot-loader'

const { store, history } = createStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Root />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default hot(module)(App);
