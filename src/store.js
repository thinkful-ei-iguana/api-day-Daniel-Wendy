import item from './item';

let items = [];
let hideCheckeditems = false;
let error = {isError: false, message: ''};

const findById = function (id) {
  return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function (item) {
  this.items.push(item);
};

const findAndDelete = function (id) {
  
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

const findAndUpdate = function(id, newData) {
  let item = this.findById(id);
  let newItem = Object.assign(item, newData);
  return newItem;
};

const setError = function (err) {
  error.isError = true;
  error.message = err.message;
};

export default {
  items,
  hideCheckeditems,
  findById,
  addItem,
  findAndDelete,
  toggleCheckedFilter,
  findAndUpdate,
  setError,
  error
};