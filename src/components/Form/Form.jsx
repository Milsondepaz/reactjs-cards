import React, { Component } from "react";
import "./style.css"


class Form extends Component {

    constructor(props){
        super(props);
        this.title ="";
        this.text ="";
    }

    _handlechangeTitle (event ) {
        event.stopPropagation();
        this.title  = event.target.value;
        //console.log(this.title)

    }

    _handlechangeText (event ) {
        event.stopPropagation();
        this.text  = event.target.value;
        //console.log(this.text)

    }

    _createNote (event ) {
        event.preventDefault();
        event.stopPropagation();
        this.props.createNote(this.title , this.text);
    }

    render() {
        return  (    
            <form 
            className="form" 
            style={{ paddingBottom: "10%"}}
            onSubmit={this._createNote.bind(this)}
            >
                
                <input 
                type="text" 
                class="form-control" 
                placeholder="Title" 
                onChange={this._handlechangeTitle.bind(this)}
                />

                <textarea 
                class="form-control" 
                rows="15" 
                placeholder="Write your note" 
                style={{ marginTop: "2%"}}
                onChange={this._handlechangeText.bind(this)}
                />

                <button 
                className="btn btn-primary"
                style={{ marginTop: "2%", width: "200px"}}>
                    Add Note
                </button>

            </form>         
        );
    }
}

export default Form;

