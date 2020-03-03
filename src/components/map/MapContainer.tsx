import * as React from "react";
import "./MapContainer.scss";

import { Map, GoogleApiWrapper, InfoWindow, Marker, GoogleAPI, MarkerProps } from "google-maps-react";

const API_KEY = process.env.REACT_APP_MAPS_API_KEY
  ? process.env.REACT_APP_MAPS_API_KEY
  : "";

interface IProps {
  google: GoogleAPI
}

interface IState {
  activeMarker: google.maps.Marker
}

class MapContainer extends React.Component<IProps> {
  state = {
    showingInfoWindow: false,
    activeMarker: new google.maps.Marker,
    selectedPlace: {
      name: String
    }
  };

  onMarkerClick = (props: MarkerProps | undefined, marker: google.maps.Marker | undefined, e: any) => {
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
