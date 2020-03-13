import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import qs from 'querystring'; 
import Weather from './Components/Weather';
import Menu from './Components/Menu'
import './App.css';
import axios from 'axios';



class App extends Component {

  state = {
    temperature: 0,
    city: 'Paris',
    token : ''
  }

  coord = {
    Paris : {
      lat_ne : 48.86471476180278,
      lat_sw : 48.83579746243092,
      lon_ne : 2.373046875,
      lon_sw : 2.3291015625,
    },
    NewYork : {
      lat_ne : 40.97989806962013,
      lat_sw : 38.82259097617712,
      lon_ne : -81.5625,
      lon_sw : -81.5625,
    },
    Bogota : {
      lat_ne : 5.266007882805492,
      lat_sw : 4.915832801313174,
      lon_ne : -75.234375,
      lon_sw : -75.5859375,
    },
    Berlin : {
      lat_ne : 52.3755991766591,
      lat_sw : 52.26815737376817,
      lon_ne : 13.7109375,
      lon_sw : 13.53515625,
    },

  }

  changeCity = (city) => {

    console.log(this.coord[city].lat_ne)

    var key;
    var type;
    var adress;
    this.setState({city:city})
    axios.get('https://api.netatmo.com/api/getpublicdata', {
      params: {
        lat_ne: this.coord[city].lat_ne,
        lat_sw: this.coord[city].lat_sw,
        lon_ne: this.coord[city].lon_ne,
        lon_sw: this.coord[city].lon_sw
      },
      headers: {
        'Authorization': 'Bearer '+this.state.token
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

  constructor(props) {
    super(props);

    var key;
    var type;
    var adress;

    var lat_ne = 48.86471476180278;
    var lat_sw = 48.83579746243092;
    var lon_ne = 2.373046875;
    var lon_sw = 2.3291015625;
    var token = '5e67c7fb273f77000c126424|ae38a4e805e189aae3b90e2fddfb6021'
    var url= "https://api.netatmo.com/oauth2/token"

    const requestBody = {
      grant_type: 'password',
      client_id: '5de510cde0c2b13b42637224',
      client_secret: 'C5MVVhs3ARk1CO73qH3ClREBJuQJ7Cc4nmN6',
      username: 'anne-lise.herve@edu.ece.fr',
      password: 'KiwiFunny91%',
      scope: 'read_station'
    }

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    axios.post(url, qs.stringify(requestBody), config).then((result) => {

      this.setState({token:result.data.access_token})
      this.changeCity('Paris')
    })
    .catch((err) => {
     
    })
  }

  

  render() {
    return (
      <div>
        <Container className="Container" >
          <h1 className="title">METEO DU JOUR</h1>
          
          <Row>

            <Col xl="2" lg="3" md="4" xs="5" >
              <Menu callbackChangeCity={this.changeCity}></Menu>
            </Col>
            <Col xl="10" lg="9" md="8" xs="5">
              <Weather temperature={this.state.temperature} city={this.state.city}>
              </Weather>
            
            </Col>

          </Row>

        </Container>
      </div>

    );
  }
}


export default App;
