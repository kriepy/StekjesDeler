import * as React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ lat, lng, text }) => <div>{text}</div>;

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
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
