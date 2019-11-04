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
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    });

  console.log(api.BASE_URL);
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
