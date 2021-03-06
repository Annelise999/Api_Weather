import React, {Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css';


class Menu extends Component {

    constructor(props) {
        super(props);

    }
    
    render() {
      return (
        <div className="vertical-menu">
            
        <a className="active">Cities</a>
        <a onClick={() => this.props.callbackChangeCity('Paris')}> Paris</a>
        <a  onClick={() => this.props.callbackChangeCity('NewYork')}> New-York</a>
        <a  onClick={() => this.props.callbackChangeCity('Bogota')}> Bogota</a>
        <a  onClick={() => this.props.callbackChangeCity('Berlin')}> Berlin </a>
        

      </div>
  
    );
  }
  }
  
  
  export default Menu;
  