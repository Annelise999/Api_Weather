import React, {Component} from 'react';
import './Weather.css'


class Weather extends Component {

    constructor(props) {
        super(props);
    
    }
    
    render() {
      return (
        <div className = "tab">
             <h1 className= "debut"> La météo du jour est: </h1>
            <table className= "tableau">
               
                <tr className = "titre">
                    <th>Ville</th> 
                    <th>Température</th>
                </tr>
                <tr className ="valeurs">
                    <td>{this.props.city}</td> 
                    <td>{this.props.temperature}</td>
                </tr>
            
                </table>
        
  </div>
  
    );
  }
  }
  
  
  export default Weather;
  