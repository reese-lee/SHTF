import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router';
import { Home } from './components/Home';
import { Counter } from './components/Counter';
import { Info } from './components/Info';
import { Maps } from './components/Maps';
import CategoriesList from './components/CategoriesList';
import ContactsList from './components/ContactsList';
import MapDanger from './components/MapDanger';
import FoodList from './components/FoodList';
import ItemsList from './components/ItemsList';
import SuppliesList from './components/SuppliesList';
import AppContainer from './components/AppContainer';

const getData = async () => {
  const response = await fetch('/api/Lists/GetCategories');

  const categories = await response.json();
  return categories;
};

const getContactList = async () => {
  const response = await fetch('/api/Lists/GetContacts');

  const contacts = await response.json();
  return contacts;
};

const getFoodList = async () => {
  const response = await fetch('/api/Lists/GetFoods');

  const foods = await response.json();
  return foods;
};

const getItemList = async () => {
  const response = await fetch('/api/Lists/GetItems');

  const items = await response.json();
  return items;
};

const getSupplyList = async () => {
  const response = await fetch('/api/Lists/GetSupplies');

  const supplies = await response.json();
  return supplies;
};

function App(props) {

  const [categoryList, setCategoryList] = useState([]);
  const [contactList, setContactList] = useState([]);
  const [foodList, setFoodList] = useState([]);
  const [itemList, setItemList] = useState([]);
  const [supplyList, setSupplyList] = useState([]);

  useEffect(() => {
    getData().then(list => {
      setCategoryList(list)
    });
    getContactList().then(contactList =>{
      setContactList(contactList)
    });
    getFoodList().then(foodList =>{
      setFoodList(foodList)
    });
    getItemList().then(itemList =>{
      setItemList(itemList)
    });
    getSupplyList().then(supplyList =>{
      setSupplyList(supplyList)
    })
  }, []);

    return (
      <div>
      <Route exact path='/' component={Home} />
      <div>
      <Switch>
        <Route path='/counter' component={Counter} />
        <Route path='/info' component={Info} />
        <Route path='/maps' component={Maps} />
        <Route path='/DangerZone' component={MapDanger} />
        <Route path='/lists'  render={()=><CategoriesList categories={categoryList}/>} />
        <Route path='/Contact' render={()=><ContactsList contacts={contactList}/>} />
        <Route path='/Food' render={()=><FoodList foods={foodList}/>} />
        <Route path='/Item' render={()=><ItemsList items={itemList} />} />
        <Route path='/Supply' component={AppContainer} />
        <Route path='/AppContainer' component={AppContainer}/>

      </Switch>
      </div>
      </div>
    );

}

export default App;
