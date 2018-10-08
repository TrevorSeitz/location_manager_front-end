import React from "react";
import * as actions from "../actions";
import { NavLink } from "react-router-dom";

let allContacts = [];
let contactList = [];

const ListAllContacts = props => {
  const places = props.location.places.places;
  let allPlaces = places.sort(function(a, b) {
    var idA = a.id; // ignore upper and lowercase
    var idB = b.id; // ignore upper and lowercase
    if (idA < idB) {
      return -1;
    }
    if (idA > idB) {
      return 1;
    }

    // names must be equal
    return 0;
  });

  return (
    <div className="contact-list">
      <div className="navbar">
        <NavLink
          to="/"
          exact
          activeStyle={{
            background: "darkblue"
          }}
        >
          <button className="button">Add Location</button>
        </NavLink>
        <NavLink
          to="/places/visible_locations"
          exact
          activeStyle={{
            background: "darkblue"
          }}
        >
          <button className="button">See locations</button>
        </NavLink>
      </div>

      <div>
        <NavLink
          to={{
            pathname: "/places/all_contacts",
            places: { places: places }
          }}
        >
          <button className="button">Order Contacts by Location</button>
        </NavLink>
      </div>
      <div>
        <ul>
          {allPlaces.map(place => {
            return (
              <div className="contact-list" key={place.id}>
                <p>
                  {place.id}. Place: {place.name}
                </p>
                <p>Contact Name: {place.contactName}</p>
                <p>Contact Phone: {place.contactPhone}</p>
                <p>email: {place.email}</p>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ListAllContacts;