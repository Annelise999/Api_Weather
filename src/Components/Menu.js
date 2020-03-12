


import React, {Component} from 'react';
import './Menu.css';


class Menu extends Component {

    constructor(props) {
        super(props);

    }
    
    render() {
      return (
        <div class="vertical-menu">
        <a href="#" class="active">Cities</a>
        <a href="#"> Paris</a>
        <a href="#"> New-York</a>
        <a href="#"> Bogota</a>
        <a href="#"> Berlin </a>
      </div>
  
    );
  }
  }
  
  
  export default Menu;
  