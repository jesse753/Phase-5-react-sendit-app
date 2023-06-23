import React, { useState, useEffect } from 'react';
import Map from './Map';
import DeliveryDetails from './DeliveryDetails';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Autocomplete from 'react-google-autocomplete';
import '../App.css';

const App = () => {
  const [pickupLocation, setPickupLocation] = useState({ lat: 0, lng: 0 });
  const [destination, setDestination] = useState({ lat: 0, lng: 0 });
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  const handlePickupPlaceSelect = (place) => {
    // Extract latitude and longitude from the selected pickup place and update the state
    const { lat, lng } = place.geometry.location;
    setPickupLocation({ lat: lat(), lng: lng() });
  };

  const handleDestinationPlaceSelect = (place) => {
    // Extract latitude and longitude from the selected destination place and update the state
    const { lat, lng } = place.geometry.location;
    setDestination({ lat: lat(), lng: lng() });
  };

  useEffect(() => {
    // Perform calculations and fetch travel distance and duration based on pickupLocation and destination
    // Example: Hardcoded values for demonstration purposes
    const calculatedDistance = '2777 km';
    const calculatedDuration = '2 days 3 hours';

    setDistance(calculatedDistance);
    setDuration(calculatedDuration);
  }, [pickupLocation, destination]);

  return (
    <div>
      <div>
        <label>Pickup Location:</label>
        <Autocomplete
          onLoad={onPickupLoad}
          onPlaceChanged={handlePickupPlaceSelect}
          types={['geocode']}
        />
      </div>
      <div>
        <label>Destination:</label>
        <Autocomplete
          onLoad={onDestinationLoad}
          onPlaceChanged={handleDestinationPlaceSelect}
          types={['geocode']}
        />
      </div>
      <Map
        apiKey={apiKey}
        pickupLocation={pickupLocation}
        destination={destination}
        distance={distance}
        duration={duration}
      />
      <DeliveryDetails
        distance={distance}
        duration={duration}
      />
    </div>
  );
};

export default App;




