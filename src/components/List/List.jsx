import React , { Component }  from "react";
import Card from "../Card";


class List extends Component {

  
  render() {
    return  (
      <ul className="lista-notas">
        { this.props.notes.map((note, index) => 
          {
            return (
              <li className="lista-notas_item" key = {index}>
                <Card title={note.title} text={note.text}/>
              </li> 
            );
          }
          )}            
      </ul>
    );
 }
}
export default List;

