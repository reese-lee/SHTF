import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Info } from './components/Info';
import { Maps } from './components/Maps';
import CategoriesList from './components/CategoriesList';
import Category from './components/Category';
import {InfoOne} from './components/InfoOne';

const getData = async () => {
  const response = await fetch('/api/Lists/GetCategories');

  const categories = await response.json();
  return categories;
};

function App(props) {

  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getData().then(list => {
      setCategoryList(list)
    });
  }, []);

    return (
      <div>
      <Route exact path='/' component={Home} />
      <div>
      <Switch>
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/info' component={Info} />
        <Route path='/maps' component={Maps} />
        <Route path='/infoOne' component={InfoOne} />
        <Route path='/lists'  render={()=><CategoriesList categories={categoryList}/>} />
      </Switch>
      </div>
      </div>
    );

}

export default App;
