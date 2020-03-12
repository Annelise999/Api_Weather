import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import SideBar from './Components/SideBar';
import SideNav from './Components/SideNav';
import Weather from './Components/Weather';
import Menu from './Components/Menu'
import './App.css';
import axios from 'axios';



class App extends Component {

  state = {
    temperature: 0
  }

  constructor(props) {
    super(props);

    var data = [];
    var key;
    var type;
    var adress;

    var lat_ne = 48.86471476180278;
    var lat_sw = 48.83579746243092;
    var lon_ne = 2.373046875;
    var lon_sw = 2.3291015625;
    var token = '5e67c7fb273f77000c126424|ae38a4e805e189aae3b90e2fddfb6021'
    axios.get('https://api.netatmo.com/api/getpublicdata', {
      params: {
        lat_ne: lat_ne,
        lat_sw: lat_sw,
        lon_ne: lon_ne,
        lon_sw: lon_sw
      },
      headers: {
        'Authorization': 'Bearer '+token
      }

    }).then(response => {
      if (response.status == 200) {     
        for(key in response.data.body[0].measures)
        { 
          for (type in response.data.body[0].measures[key].type)
          {
            if  (response.data.body[0].measures[key].type[type] === "temperature")
              {
                for (adress in response.data.body[0].measures[key].res)         
                  console.log(response.data.body[0].measures[key].res[adress][type]) 
                  this.setState( {temperature: response.data.body[0].measures[key].res[adress][type] })
              }

          }
          
        }
      } else {
        throw new Error("Something wrong")
      }
    }).catch(function (error) {
        console.log(error);
      })

  }



  render() {
    return (
      <div>
        <Container className="Container" >
          <h1 className="title">METEO DU JOUR</h1>
          <h3> {this.state.temperature}</h3>
          <Row>

            <Col xl="2" lg="3" md="4" xs="5" >
              <Menu></Menu>
            </Col>
            <Col xl="10" lg="9" md="8" xs="5">
              <Weather>
              </Weather>
              <p>OULOUOUOUOU </p>
            </Col>

          </Row>

        </Container>
      </div>

    );
  }
}


export default App;
