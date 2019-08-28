/* eslint-disable no-undef */
import React, { Component } from 'react'
// import './App.css'
import TodoList from './TodoList'
import TodoItems from './TodoItems'
import Encrypt from './Encrypt';

class App extends Component {
  
  inputElement = React.createRef()
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      },
    }
  }
  deleteItem = key => {
    console.log(this.item.key)
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }

  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }
  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
   console.log("items",newItem)
    }
    
  }
  encrypt = () => { 
    var user_id='10'
    console.log(this.state.currentItem.text)
    var CryptoJS = require("crypto-js");
    console.log(user_id)
    var ciphertext = CryptoJS.AES.encrypt(this.state.currentItem.text, 'secret key 123').toString();
    console.log(ciphertext)
    window.open("http://192.168.1.158:4200/landing/userdetails/"+ciphertext);    

  }
  
  render() {
    return (
      <div className="App">
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <TodoItems entries={this.state.items} deleteItem={this.deleteItem}  />
        <Encrypt encrypt={this.encrypt}/>
      </div>
    )
  }
}

export default App
