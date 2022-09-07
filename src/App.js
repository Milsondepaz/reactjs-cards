import React, { Component } from "react";
import List from "./components/List";
import Form from "./components/Form";
import "./assets/App.css";


class App extends Component {

  constructor () {
    super();
    
    this.state = {
      notes: []
    }
  }

  createNote(title, text) {
    const newNote = {title, text};
    const newArrayNotes = [...this.state.notes,newNote]
    const newState = {
      notes:newArrayNotes
    }
    this.setState(newState)
  }
  
  render () {
    return (
      <div className="conteudo">
        <div className="container">
          <div class="row">
            <div class="col">
              <Form createNote={this.createNote.bind(this)}/>
            </div>
            <div class="col">
              <List notes = {this.state.notes}/>  
            </div>
          </div>
        </div>       
      </div> 
  );
  }
}

export default App;


//1- npm install bootstrap
//2- add this: import 'bootstrap/dist/css/bootstrap.css'; to index.js
//3- delete index.css
//4- delete also the import

// 5- npm add styled-components
// 6- npm add react-router-dom react-icons

// 7- identar codigo: alt + shift + f 
//- Open the commands palette - Type change language mode - Press Enter - Type  javascript react - Press Enter
