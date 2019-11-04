
const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Daniel-Wendy';

const getItems = function () {
  let error;
  return fetch(`${BASE_URL}/items`)
    .then(res => {
      if(!res.ok) {
        error = {code: res.status};
      }
      return res.json();
    })
    .then(data => {
      if (error) {
        error.message = data.message;
        return Promise.reject(error);
      }
      return data;
    });
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

const deleteItem = function(id) {
  return fetch(`${BASE_URL}/items/${id}`, {
    method: 'DELETE'
  });
};

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem
};