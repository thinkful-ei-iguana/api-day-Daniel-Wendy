import store from './store';

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Daniel-Wendy';

const getItems = function () {
  return apiFetch(`${BASE_URL}/items`);
};


const createItem = function(name) {
  let newItem = JSON.stringify({name:name});

  return apiFetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: newItem
  });
}; 

const updateItem = function(id, object) {
  let updateData = JSON.stringify(object);
  return apiFetch(`${BASE_URL}/items/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: updateData
  });
};

const deleteItem = function(id) {
  return apiFetch(`${BASE_URL}/items/${id}`, {
    method: 'DELETE'
  });
};

const apiFetch = function (...args) {
  let error;
  return fetch(...args)
    .then(res => {
      if(!res.ok) {
        error = {code: res.status};
        store.setError(error);
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

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem,
  apiFetch
};