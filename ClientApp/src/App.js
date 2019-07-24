import React, { Component } from 'react';
import { Route } from 'react-router';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Info } from './components/Info';
import { Maps } from './components/Maps';
import { Lists } from './components/Lists';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <div>
      <Route exact path='/' component={Home} />
      <div>
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/info' component={Info} />
        <Route path='/maps' component={Maps} />
        <Route path='/lists' component={Lists} />

      </div>
      </div>
    );
  }
}
