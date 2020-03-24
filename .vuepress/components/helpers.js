// just needed for the build process
if (!localStorage) {
  localStorage = {
    setItem() {},
    getItem(){}
  }
}

export function hasItem(id) {
  var json = localStorage.getItem('inventory');
  var inv = JSON.parse(json);
  if(!inv) {
    inv = {};
  }
  return inv[id];
}

export function addItem(id) {
  var json = localStorage.getItem('inventory');
  var inv = JSON.parse(json);
  if (!inv) {
    inv = {};
  }
  inv[id] = true;
  localStorage.setItem('inventory',JSON.stringify(inv));
}

export function getItems() {
  var json = localStorage.getItem('inventory');
  var inv = JSON.parse(json);
  if (!inv) {
    inv = {};
  }
  var keys = Object.keys(inv);
  return keys;
}