import React, {Component} from 'react';
import './Weather.css'


class Weather extends Component {

    constructor(props) {
        super(props);
    
    }
    
    render() {
      return (
        <div className = "tab">
             <h2 className= "debut"> LA MÉTÉO DU JOUR EST: </h2>
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
  