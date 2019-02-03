import React, { Component } from 'react';

class Map extends Component {

  markers = [];
  infowindows = [];

  addMarkers = locations => {
    //Add markers for each location
    if (window.google && this.markers.length === 0 && this.infowindows.length === 0){
      locations.forEach(location => {
        let marker = new window.google.maps.Marker({
          position: {
            lat: location.coordinates.latitude,
            lng: location.coordinates.longitude
          },
          map: window.mapObject,
          id: location.id,
          name: location.name
        });
        //Set infowindow on each marker
        let infowindow = new window.google.maps.InfoWindow({
          id: location.id
        });
        //Add infowindow event listener to each marker
        marker.addListener("click", function() {
          infowindow.open(window.mapObject, marker);
        });
        //Set infowindo information
        infowindow.setContent(`
          <div>
            <h2>${location.name}</h2>
            <p>${location.location.address1}</p>
            <p>Houston, Texas</p>
            <p>${location.phone}</p>
          <div>`
        );    
        //Add inforwindows and markers to the respective arrays
        this.infowindows.push(infowindow);  
        this.markers.push(marker);
        }
      );
      //Zoom into each marker onClick  
      this.markers.forEach(marker => {
        marker.addListener('click', function() {
          this.map.setZoom(15);
          this.map.setCenter(marker.getPosition());
        });
      });       
      //Set infowindows and markers array to the window object
      window.markers = this.markers;
      window.infowindows = this.infowindows;
    }  
  }

  focusMarker() {
    let activeRestaurant = this.props.zoomRestaurant;
    if(window.markers instanceof Array) {
      window.markers.forEach((marker, index) => {
        if (activeRestaurant === marker.id) { 
          window.infowindows[index].open(window.mapObject, marker);
        }
      })
    }
  }

  render() {
    this.addMarkers(this.props.locations);
    this.focusMarker();

    return (
      <div></div>
    );
  }
}

export default Map;

