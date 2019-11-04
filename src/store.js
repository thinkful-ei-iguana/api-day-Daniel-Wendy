import item from './item';

const items = [];
let hideCheckeditems = false;

const findById = function (id) {
  return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function (item) {
  this.items.push(item);
};



const findAndDelete = function (id) {
  this.items = this.items.filter(currentItem => currentItem.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

const findAndUpdate = function(id, newData) {
  let item = this.items.id;
  let newItem = Object.assign(newItem, newData);
  return newItem;
};

export default {
  items,
  hideCheckeditems,
  findById,
  addItem,
  findAndDelete,
  toggleCheckedFilter,
  findAndUpdate
};