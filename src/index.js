import $ from 'jquery';
import store from './store';
import 'normalize.css';
import './index.css';

import shoppingList from './shopping-list';
import api from './api';


const main = function () {
  api.getItems()
    .then(res => res.json())
    .then((items) => {
      const item = items[5];
      return api.updateItem(item.id, { name: 'foobar' });
    })
    .then(res => res.json())
    .then(() => console.log('updated!'));
  const item = store.items[5];
  console.log('current name: ' + item.name);
  store.findAndUpdate(item.id, { name: 'foobar' });
  console.log('new name: ' + item.name);
};
console.log(api.BASE_URL);
shoppingList.bindEventListeners();
shoppingList.render();
  

$(main);
