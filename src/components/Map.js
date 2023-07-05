import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, Polyline } from '@react-google-maps/api';
import PlacesAutocomplete from 'react-places-autocomplete';

const Map = ({
  apiKey,
  onPickupLoad,
  onDestinationLoad
}) => {
  const [pickupAddress, setPickupAddress] = useState('');
  const [destinationAddress, setDestinationAddress] = useState('');
  const [pickupLocation, setPickupLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  const handlePickupChange = (address) => {
    setPickupAddress(address);
  };

  const handleDestinationChange = (address) => {
    setDestinationAddress(address);
  };

  const handleCalculate = () => {
    // Use the Google Maps Distance Matrix API to calculate distance and duration
    const service = new window.google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [pickupAddress],
        destinations: [destinationAddress],
        travelMode: 'DRIVING',
      },
      (response, status) => {
        if (status === 'OK') {
          const { distance, duration } = response.rows[0].elements[0];
          setDistance(distance.text);
          setDuration(duration.text);
        }
      }
    );
  };

  useEffect(() => {
    // Fetch pickup location and destination from API or user input
    // You can replace this with your actual API or input logic
    const fetchPickupLocation = async () => {
      // Example: Fetch the coordinates for the pickup address using a geocoding API
      const response = await fetch(
        `https://geocoding-api.com?address=${encodeURIComponent(pickupAddress)}&apiKey=${apiKey}`
      );
      const data = await response.json();
      const { lat, lng } = data.results[0].geometry.location;
      setPickupLocation({ lat, lng });
    };

    const fetchDestination = async () => {
      // Example: Fetch the coordinates for the destination address using a geocoding API
      const response = await fetch(
        `https://geocoding-api.com?address=${encodeURIComponent(destinationAddress)}&apiKey=${apiKey}`
      );
      const data = await response.json();
      const { lat, lng } = data.results[0].geometry.location;
      setDestination({ lat, lng });
    };

    // Fetch the pickup location and destination when their addresses change
    if (pickupAddress !== '') {
      fetchPickupLocation();
    }
    if (destinationAddress !== '') {
      fetchDestination();
    }
  }, [pickupAddress, destinationAddress, apiKey]);

  return (
    <div>
      <PlacesAutocomplete value={pickupAddress} onChange={handlePickupChange} onLoad={onPickupLoad}>
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div>
            <input {...getInputProps({ placeholder: 'Enter pickup location' })} />
            <div>
              {suggestions.map((suggestion, index) => (
                <div key={index} {...getSuggestionItemProps(suggestion)}>
                  {suggestion.description}
                </div>
              ))}
            </div>
          </div>
        )}
      </PlacesAutocomplete>

      <PlacesAutocomplete value={destinationAddress} onChange={handleDestinationChange} onLoad={onDestinationLoad}>
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div>
            <input {...getInputProps({ placeholder: 'Enter destination' })} />
            <div>
              {suggestions.map((suggestion, index) => (
                <div key={index} {...getSuggestionItemProps(suggestion)}>
                  {suggestion.description}
                </div>
              ))}
            </div>
          </div>
        )}
      </PlacesAutocomplete>

      <button onClick={handleCalculate}>Calculate</button>

      {pickupLocation && destination && (
        <GoogleMap
          center={pickupLocation}
          zoom={8}
          mapContainerStyle={{ width: '100%', height: '400px' }}
        >
          <Marker position={pickupLocation} />
          <Marker position={destination} />
          <Polyline
            path={[pickupLocation, destination]}
            options={{ strokeColor: '#0000FF' }}
          />
        </GoogleMap>
      )}

      {distance && duration && (
        <div>
          <p>Distance: {distance}</p>
          <p>Duration: {duration}</p>
        </div>
      )}
    </div>
  );
};

export default Map;



























































