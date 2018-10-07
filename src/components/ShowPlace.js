import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { NavLink, Link } from "react-router-dom";

const ShowPlace = props => {
  const place = props.location.state.place;
  debugger;
  const bounds = props.bounds;
  // props.getLocations(null, -180, 180, -90, 90);
  // const place = props.location.state.place;
  props.getLocations(null, bounds[0], bounds[1], bounds[2], bounds[3]);

  function shorten(x) {
    return Number.parseFloat(x).toFixed(4);
  }

  if (place.id !== undefined) {
    var button = <button className="button">Edit</button>;
  } else {
    var button = "";
  }

  // debugger;
  return (
    <div>
      <div className="navbar">
        <NavLink to="/" exact>
          <button className="tripleButton">Add Location</button>
        </NavLink>
        <NavLink to="/places/all_contacts" exact>
          <button className="tripleButton">See Contacts</button>
        </NavLink>
        <NavLink to="/places/visible_locations" exact>
          <button className="tripleButton">Back to locations</button>
        </NavLink>
      </div>
      <div key={place.id}>
        <p>Place: {place.name}</p>
        <p>
          Lat: {shorten(place.latitude)} Long: {shorten(place.longitude)}
        </p>
        <p>File Name: {place.fileName}</p>
        <p>Venue: {place.venue}</p>
        <p>Contact Name: {place.contactName}</p>
        <p>Contact Phone: {place.contactPhone}</p>
        <p>email: {place.email}</p>
        <p>image: </p>
        <img
          src={require("../assets/images/IMG_0774.jpg")}
          width="250"
          alt=""
        />
      </div>

      <div className="navbar">
        <Link
          to={{
            pathname: `/places/${place.id}/edit`,
            state: { place: place },
            query: { id: place.id }
          }}
        >
          {button}
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    places: state.getLocationsReducer,
    bounds: state.setBoundsReducer
  };
};

export default connect(
  mapStateToProps,
  actions
)(ShowPlace);
