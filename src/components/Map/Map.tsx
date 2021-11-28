import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }: { text: string }) => <div>{text}</div>;

const mapOptions = {
  center: {
    lat: 59.95,
    lng: 30.33,
  },
  zoom: 11,
};
const Map = () => {
  return (
    <>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDR1yuLl0Uv0-AfE_rY4uqIepC4FRD6Hx8' }}
        defaultCenter={mapOptions.center}
        defaultZoom={mapOptions.zoom}
      >
        <AnyReactComponent text="My Marker" />
      </GoogleMapReact>
    </>
  );
};

export default Map;
