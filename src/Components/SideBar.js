import React, {Component} from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './SideBar.css';


class SideBar extends Component {

    
    render() {
      return (
        <div>
           
        <SideNav 
        onSelect={(selected) => {
            // Add your code here
        }}
    >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
           
            <NavItem eventKey="cities">
                <NavIcon>
                    <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Cities
                </NavText>
                <NavItem eventKey="cities/paris">
                    <NavText>
                        Paris
                    </NavText>
                </NavItem>
                <NavItem eventKey="charts/newyork">
                    <NavText>
                        New-York
                    </NavText>
                </NavItem>
                <NavItem eventKey="charts/berlin">
                    <NavText>
                        Berlin
                    </NavText>
                </NavItem>
                <NavItem eventKey="charts/bogota">
                    <NavText>
                        Bogota
                    </NavText>
                </NavItem>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
  

  </div>
  
    );
  }
  }
  
  
  export default SideBar;
  