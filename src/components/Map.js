import React from 'react';
import { GoogleMap, Marker } from 'react-google-maps';

const Map = () => {
  return (
    <GoogleMap
      defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
      defaultZoom={10}
    >
      <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
    </GoogleMap>
  );
};

export default Map;
