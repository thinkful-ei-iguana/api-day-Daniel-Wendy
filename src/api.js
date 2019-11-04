
const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Daniel-Wendy';

const getItems = function () {
  return fetch(`${BASE_URL}/items`);
};

const createItem = function(name) {
  let newItem = JSON.stringify({name:name});
  return fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: newItem
  });
}; 

const updateItem = function(id, object) {
  let updateData = JSON.stringify(object);
  return fetch(`${BASE_URL}/items/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: updateData
  });
};

export default {
  getItems,
  createItem,
  updateItem  
};