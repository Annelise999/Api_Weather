import React, {Component} from 'react';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import './App.css';
import ReactWeather from 'react-open-weather';
//Optional include of the default css styles
import 'react-open-weather/lib/css/ReactWeather.css';

import SideBar from './Components/SideBar';



class App extends Component {

  constructor(props) {
    super(props);

    this.state= {
      city :"Paris",
      lat_ne :"48.86471476180278",
      lat_sw: "48.83579746243092",
      lon_ne: "2.373046875 ",
      lon_sw: "2.3291015625"



    }
  }

  render() {
    return (
      <div>

      <SideBar></SideBar>

  <ReactWeather
  forecast="today"
  apikey="YOUR_API_KEY"
  type="geo"
  lat="48.1351"
  lon="11.5820"
/>
</div>

  );
}
}


export default App;
