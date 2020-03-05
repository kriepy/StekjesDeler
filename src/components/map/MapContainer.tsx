import * as React from "react";
import "./MapContainer.scss";

import marker from "./marker_green_black.resized15.png";

import {
  Map,
  Marker,
  GoogleApiWrapper,
  InfoWindow,
  GoogleAPI,
  MarkerProps
} from "google-maps-react";

const API_KEY = process.env.REACT_APP_MAPS_API_KEY
  ? process.env.REACT_APP_MAPS_API_KEY
  : "";

interface IProps {
  google: GoogleAPI;
}

interface IState {
  activeMarker: google.maps.Marker;
}

class MapContainer extends React.Component<IProps> {
  state = {
    showingInfoWindow: false,
    activeMarker: new google.maps.Marker(),
    selectedPlace: {
      name: String
    }
  };

  onMarkerClick = (
    props: MarkerProps | undefined,
    marker: google.maps.Marker | undefined,
    e: any
  ) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onClose = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  getMarkers() {
    return [
      <Marker
        position={{ lat: -1.2884, lng: 36.8233 }}
        onClick={this.onMarkerClick}
        name="Bromelia"
        icon={marker}
      />,
      <Marker
        position={{ lat: -1.2856, lng: 36.8333 }}
        onClick={this.onMarkerClick}
        name="Calathea"
        icon={marker}
      />
    ];
  }

  render() {
    const markers = this.getMarkers();

    return (
      <div className="MapContainer">
        <Map
          google={this.props.google}
          zoom={14}
          initialCenter={{
            lat: -1.2884,
            lng: 36.8233
          }}
        >
          {markers}

          <InfoWindow
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
            marker={this.state.activeMarker}
          >
            <div className="InfoWindow">
              <img className="InfoImage" src={marker}></img>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapContainer);
