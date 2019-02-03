import React, { Component } from 'react';
//CSS
import './App.css';
//Modules
import Map from './components/Map';
import Sidebar from './components/Sidebar';

class App extends Component {
  state = {
    locations: [],
    active: [null]
  }

  componentWillMount(){
    this.loadScript();
  }

  //YELP API call
  componentDidMount() {
    const APIkey = `meP7_EKLifhMSzFibob9ZXuag5yhbTVz5C8pWlozlexT_AVeJdZMyC6r0uKS3jyedbcDxXwqZve__pMlgWWLgGALypHauT_FfpmZ7exJEITIrrzbT0QIKZYArWVKXHYx`;

    const getRestaurants = () => {
      fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Houston&categories=mexican&sort_by=review_count&limit=25`, {
      method: 'GET',
      //body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${APIkey}`
      }
    }).then(resp => resp.json())
      .then(result => result.businesses)
      .then(res => 
        this.setState(
          {locations: res}
        ))
    };
    getRestaurants();
  }
  
  //Map   
  initMap() {
    //Initiate map
    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: {lat: 29.76, lng: -95.37},
      zoom: 11,
    });
    window.mapObject = map;
  }

  loadScript() {
    let createScript = this.createMapScript();
    let pageScripts = document.getElementsByTagName("script");
    let firstScript = pageScripts[0];
    firstScript.parentNode.insertBefore(createScript, firstScript);
    window.initMap = this.initMap;
  }

  createMapScript() {
    let API = "AIzaSyCEoezQTKEDQQzCOv71vNzfu5JrVjomoyo";
    let mapScript = document.createElement("script");
    mapScript.async = true;
    mapScript.defer = true;
    mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${API}&callback=initMap`;
    return mapScript;
  }

  //List items
  restaurantClicked = (id) => {
    //console.log("Location ID: ", location);
    for (let i=0; i<window.markers.length; i++) {
      //console.log("Window Markers: ", window.markers[i])
      if (id === window.markers[i].id) {
        this.setState(
          {active: id}
        )
        //console.log("YES!");
        //console.log("Window Marker ID: ", window.markers[i])
        //console.log("window.markers: ", window.markers)
        //console.log("window object: ", window)
        //console.log("window.mapObject: ", window.mapObject)
        //console.log("window.infowindow: ", window.infowindow)
        //window.infowindow.open(window.mapObject, window.markers[i]);
      }
    }
  }

  render() {
    return (
      <div className="outer-container">
        <div className="sidebar-container flex-column"> 
          <Sidebar locations={this.state.locations} zoomInfoWindow={this.restaurantClicked}/>
        </div>
        <div className="map-container" id="map">
          <Map locations={this.state.locations} zoomRestaurant={this.state.active}/>
        </div> 
      </div>
    );
  }
}

export default App;
