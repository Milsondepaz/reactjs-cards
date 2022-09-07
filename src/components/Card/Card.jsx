import React, { Component } from "react";
import "./style.css"

export default class Card extends Component {
    render() {
        return  (    
            <section className="card-nota" style={{ marginBottom: "3%"}}>
                <header className="form-cadastro_cabecalho">
                    <h3 className="cadastro_input">{this.props.title}</h3>
                </header>
                <p className="cadastro_texto">{this.props.text}</p>
            </section>                  
        );
    };
};
