const restaurants = [
  {
    key: 0,
    country: "Brazil",
    restaurantName: "Chama Gaúcha Brazilian Steakhouse",
    street: "5865 Westheimer Road",
    lat: 29.73,
    lng: -95.48,
    id: "4e8cfc5b61af7424da768a77"
  },
  {
    key: 1,
    country: "Ethiopia",
    restaurantName: "Lucy Ethiopian Restaurant & Lounge",
    street: "6800 Southwest Freeway",
    lat: 29.71,
    lng: -95.50,
    id: "503056d283024e87b1d3695b"
  },
  {
    key: 2,
    country: "Germany",
    restaurantName: "Rudi Lechner’s German Restaurant",
    street: "2503 South Gessner Road",
    lat: 29.74,
    lng: -95.53,
    id: "4b493a9cf964a520c96a26e3"
  },
  {
    key: 3,
    country: "Honduras",
    restaurantName: "Mi Bella Honduras Restaurant",
    street: "1806 Wirt Road",
    lat: 29.80,
    lng: -95.48,
    id: "5229103693cd839afd5ef640"
  },
  {
    key: 4,
    country: "India",
    restaurantName: "Surya India",
    street: "700 Durham Drive",
    lat: 29.76,
    lng: -95.41,
    id: "5766a474498ea0ca1106ae22"
  },
  {
    key: 5,
    country: "Italy",
    restaurantName: "Bellissimo Ristorante",
    street: "1848 Airline Drive",
    lat: 29.80,
    lng: -95.38,
    id: "51799549e4b01d6f703c9950"
  },
  {
    key: 6,
    country: "Thailand",
    restaurantName: "Thai Gourmet",
    street: "6324 Richmond Avenue",
    lat: 29.73,
    lng: -95.49,
    id: "4b0ae2a1f964a5206e2923e3"
  },
];

module.exports = restaurants;

/*
focusMarker() {
  //console.log(window)
  //console.log(window.google)
  //console.log("Markers: ", window.markers)
  //console.log("Length: ", window.markers.length)
  //console.log("Windows: ", window.infowindows)
    //let newinfowindow = new window.google.maps.InfoWindow({});
  let activeRestaurant = this.props.zoomRestaurant;
  if(window.markers instanceof Array) {
    window.markers.forEach((marker, index) => {
      if (activeRestaurant === marker.id) { 
        //console.log(window.infowindows)
        //console.log(this.infowindows)
       
        window.infowindows[index].open(window.mapObject, marker);
    }
  })

  /*

    for (let i=0; i<window.markers.length; i++) {
      //console.log(window.infowindows[i].id)
      if (activeRestaurant === window.markers[i].id) {
        
        window.infowindows[i].open(window.mapObject, window.markers[i]);
        //console.log(window.infowindows[i]);
        //console.log(window.markers[i])
        
        /*
        Compare the id of the marker that is passed in as a prop
        to the id of the infowindow to zoom into it. Need to check
        if there is a method on the infowindow that can be used.
        
        //console.log("Active Restaurant: ", activeRestaurant); 
        //console.log("YES")   
        //console.log(window.infowindow)
      }
    }
  }
}
    */

