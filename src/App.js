/* eslint-disable no-undef */
import React, { Component } from "react";
import TodoList from "./TodoList";
import TodoItems from "./TodoItems";
import CryptoJS from "crypto-js";

class App extends Component {
  inputElement = React.createRef();
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: ""
      }
    };
  }
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key;
    });
    this.setState({
      items: filteredItems
    });
  };

  handleInput = e => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    this.setState({
      currentItem
    });
  };
  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: { text: "", key: "" }
      });
      console.log("items", newItem);
    }
  };
  encrypt = () => {
    let ciphertext = CryptoJS.AES.encrypt(
      this.state.currentItem.text,
      "secretkey123"
    ).toString();
    const task = encodeURIComponent(ciphertext);
    window.open("http://192.168.1.158:4200/landing/userdetails/" + task);
  };

  render() {
    return (
      <div className="App">
        <TodoList
          encrypt={this.encrypt}
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <TodoItems entries={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
