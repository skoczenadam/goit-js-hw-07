class Storage {
  #items;
  constructor(params) {
    this.#items = params;
  };

  getItems() {
    return this.#items;
  };

  addItem(addItem) {
    this.#items.push(addItem);
  };

  removeItem(itemToRemove) {
    this.#items.splice(this.#items.indexOf(itemToRemove), 1);
  }

};

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]