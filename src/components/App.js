import React, { useState, useEffect } from 'react';
import Map from './Map';
import DeliveryDetails from './DeliveryDetails';

const App = () => {
  const [pickupLocation, setPickupLocation] = useState({ lat: 0, lng: 0 });
  const [destination, setDestination] = useState({ lat: 0, lng: 0 });
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  const onPickupLoad = (autocomplete) => {
    if (autocomplete !== null) {
      setPickupLocation(autocomplete.getPlace().geometry.location);
    }
  };

  const onDestinationLoad = (autocomplete) => {
    if (autocomplete !== null) {
      setDestination(autocomplete.getPlace().geometry.location);
    }
  };
  
    // Fetch pickup location, destination, distance, and duration from API or user input
    // Example: API call to retrieve data
    
  useEffect(() => {
        // Fetch pickup location, destination, distance, and duration from API or user input
    // Example: API call to retrieve data
    fetch(
      `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(
        {API_KEY}
    )}&libraries=places`
    )
      .then((response) => response.json())
      .then((data) => {
        const { pickup, destination, distance, duration } = data;
  
        setPickupLocation(pickup);
        setDestination(destination);
        setDistance(distance);
        setDuration(duration);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [API_KEY]);
  

  return (
    <div>
      <Map
        pickupLocation={pickupLocation}
        destination={destination}
        onPickupLoad={onPickupLoad}
        onDestinationLoad={onDestinationLoad}
      />
{distance && duration && (
        <DeliveryDetails distance={distance} duration={duration} />
      )}
      
    </div>
  );
};

export default App;












