import * as React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ lat, lng, text }) => <div>{text}</div>;

interface IProps {
    center;
    zoom;
}

class Map extends React.Component<IProps, any> {

    static defaultProps: IProps = {
        center: {
          lat: 52.3888,
          lng: 4.6390
        },
        zoom: 13
      };

  render() {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'API-KEY'
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default Map;
