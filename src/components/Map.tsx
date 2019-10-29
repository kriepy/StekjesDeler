import * as React from "react";
import GoogleMapReact from "google-map-react";

import Marker from "./Marker";

interface IProps {
  center;
  zoom;
}

const API_KEY = process.env.REACT_APP_MAPS_API_KEY;

class Map extends React.Component<IProps, any> {

  key = API_KEY;

  static defaultProps: IProps = {
    center: {
      lat: 52.3888,
      lng: 4.639
    },
    zoom: 13
  };

  render() {
    return (
      <div style={{ height: "90vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.state ? this.state.center : this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker lat={52.3988} lng={4.629} />
        </GoogleMapReact>
      </div>
    );
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords)
      this.setState({
        center: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      });
      this.forceUpdate();

    });
  }
}

export default Map;
