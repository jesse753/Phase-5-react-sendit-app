import React from 'react';
import { GoogleMap, Marker, Polyline, useJsApiLoader } from '@react-google-maps/api';
import { usePlacesAutocomplete } from '@react-google-maps/api'; 

const Map = ({ apiKey, pickupLocation, destination, distance, duration, onPickupLoad, onDestinationLoad }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: (pickupLocation.lat + destination.lat) / 2,
    lng: (pickupLocation.lng + destination.lng) / 2,
  };

  const polylinePath = [
    { lat: pickupLocation.lat, lng: pickupLocation.lng },
    { lat: destination.lat, lng: destination.lng },
  ];

  const { suggestions: pickupSuggestions, setValue: setPickupValue } = usePlacesAutocomplete(); // Use usePlacesAutocomplete for pickup location
  const { suggestions: destinationSuggestions, setValue: setDestinationValue } = usePlacesAutocomplete(); // Use usePlacesAutocomplete for destination

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={8}
      center={center}
    >
      <Marker position={pickupLocation} />
      <Marker position={destination} />
      <Polyline path={polylinePath} />

      <input
        value={pickupValue}
        onChange={(e) => setPickupValue(e.target.value)}
        placeholder="Enter pickup location"
      />

      <input
        value={destinationValue}
        onChange={(e) => setDestinationValue(e.target.value)}
        placeholder="Enter destination"
      />
    </GoogleMap>
  ) : null;
};

export default Map;






