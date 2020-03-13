import React, {Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownButton, DropdownItem } from 'react-bootstrap';
import './Menu.css';


class DropDown extends Component {

    constructor(props) {
        super(props);

    }
    
    render() {
      return (
        <div className="vertical-menu">

        <div className="dropdown" d-block d-md-none>
        <DropdownButton className= "drop" id="dropdown-item-button" title="Cities" color="info">
        <Dropdown.Item onClick={() => this.props.callbackChangeCity('Paris')} as="button">Paris</Dropdown.Item>
        <Dropdown.Item onClick={() => this.props.callbackChangeCity('NewYork')} as="button">NewYork</Dropdown.Item>
        <Dropdown.Item onClick={() => this.props.callbackChangeCity('Bogota')} as="button">Bogota</Dropdown.Item>
         <Dropdown.Item onClick={() => this.props.callbackChangeCity('Berlin')} as="button">Berlin</Dropdown.Item>
        </DropdownButton>
        </div>
      </div>
  
    );
  }
  }
  
  
  export default DropDown;
  