import * as React from "react";
import "./MapContainer.scss";

import { Map, GoogleApiWrapper, InfoWindow, Marker, GoogleAPI, MarkerProps } from "google-maps-react";

const API_KEY = process.env.REACT_APP_MAPS_API_KEY
  ? process.env.REACT_APP_MAPS_API_KEY
  : "";

interface ContainerProps {
  google: GoogleAPI
}

class MapContainer extends React.Component<ContainerProps> {
  state = {
    showingInfoWindow: false,
    activeMarker: google.maps.Marker,
    selectedPlace: {
      name: String
    }
  };

  onMarkerClick = (props: MarkerProps, marker: google.maps.Marker, e: any) => {
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

  render() {
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
          <Marker onClick={this.onMarkerClick} name={"Some tag name"} />
          <InfoWindow
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
            marker={this.state.activeMarker}
          >
            <div>
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
