import React, { Component } from 'react';

class Restaurant extends Component {

  render() {

    return (
      <div price={this.props.price} id={this.props.id}>
        <h2 onClick={() => this.props.zoomInfoWindow(this.props.id)}>{this.props.restaurantName}</h2>
        <p><i>{this.props.street}</i></p>
        <p><i>Houston, Texas</i></p>
        <p><i>{this.props.phone}</i></p>
        <hr />
      </div>
    );
  }
}

export default Restaurant;

//lat={this.props.lat} lng={this.props.lng}