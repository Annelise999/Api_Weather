import React, {Component} from 'react';



class Weather extends Component {

    constructor(props) {
        super(props);
    
    }
    
    render() {
      return (
        <div>
            <h2>{this.props.city}</h2>

        <h3> {this.props.temperature}</h3>
  </div>
  
    );
  }
  }
  
  
  export default Weather;
  