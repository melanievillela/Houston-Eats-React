import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Sidebar extends Component {

  //Check selection price point against restaurant list to narrow down
  onSelect = (e) => {
    let hidden = [];
    let listItems = document.querySelectorAll("li");
    //If blank or 1st option show all restaurants
    if (e.target.value === "") {
      listItems.forEach(function(item) {
        item.classList.remove("hide");
        window.markers.forEach(marker => {
          marker.setMap(window.mapObject);
        });
      })
    }  else {
        listItems.forEach(function(item) {
          //If list item selected then hide other restaurants
          if (item.firstChild.getAttribute("price") !== e.target.value) {
            item.classList.add("hide");
            hidden.push(item.firstChild.id);

            //Hide markers where price doesn't equal selected drop down price
            for (let i=0; i<window.markers.length; i++) {
              for (let j=0; j<hidden.length; j++) {
                if(hidden[j] === window.markers[i].id) {
                  window.markers[i].setMap(null);     
                }
              } 
            }             
          } else {
              item.classList.remove("hide");
              window.markers.forEach(marker => {
                marker.setMap(window.mapObject);
              });
            }
        })
      }
    console.log(hidden.length)
  }

  render() {

    return (
      <div> 
        <div className="flex-column heading">
          <h1>HOUSTON EATS MEXICAN</h1>
          <select name="prices" onChange={this.onSelect} id={this.props.id}>          
            <option></option>
            <option>$</option>
            <option>$$</option>
            <option>$$$</option>
          </select>        
        </div> 
        <div className="restaurant-list">
          {/*Propogating the list items of each restaurant*/}
          <ul>
            {this.props.locations.map(location => (
              <li key={location.id}>
                <Restaurant 
                  zoomInfoWindow={this.props.zoomInfoWindow}
                  id={location.id}
                  price={location.price} 
                  restaurantName={location.name} 
                  street={location.location.address1}
                  phone={location.phone} 
                  lat={location.coordinates.latitude}
                  lng={location.coordinates.longitude}
                />
              </li>
              )
            )}
          </ul>
        </div>        
      </div>
    );
  }
}

export default Sidebar;