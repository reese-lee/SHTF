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
import MapWrapper from './components/MapWrapper';
import Contact from './components/Contact';
import ContactsList from './components/ContactsList';
import MapDanger from './components/MapDanger';

const getData = async () => {
  const response = await fetch('/api/Lists/GetCategories');

  const categories = await response.json();
  return categories;
};

const getContactList = async () => {
  const response = await fetch('/api/Lists/GetContacts');

  const contacts = await response.json();
  return contacts;
}

function App(props) {

  const [categoryList, setCategoryList] = useState([]);
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    getData().then(list => {
      setCategoryList(list)
    });
    getData().then(contactList =>{
      setContactList(contactList)
    })
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
        <Route path='/MapWrapper' component={MapWrapper} />
        <Route path='/DangerZone' component={MapDanger} />
        <Route path='/lists'  render={()=><CategoriesList categories={categoryList}/>} />
        <Route path='/Contact' render={()=><ContactsList contacts={contactList}/>} />
      </Switch>
      </div>
      </div>
    );

}

export default App;
