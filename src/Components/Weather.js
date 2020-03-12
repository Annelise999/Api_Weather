import React, {Component} from 'react';

import ReactWeather from 'react-open-weather';
import 'react-open-weather/lib/css/ReactWeather.css';




class Weather extends Component {

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
  <ReactWeather
  forecast="today"
  apikey="YOUR_API_KEY"
  type="geo"
  lat= "22"
  lon="11.5820"
/>
  </div>
  
    );
  }
  }
  
  
  export default Weather;
  