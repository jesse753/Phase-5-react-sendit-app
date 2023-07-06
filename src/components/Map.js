import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, Polyline } from '@react-google-maps/api';
import PlacesAutocomplete from 'react-places-autocomplete';

const Map = ({ onPickupLoad, onDestinationLoad }) => {
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
    const fetchPickupLocation = async () => {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          pickupAddress
        )}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
      );
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry.location;
        setPickupLocation({ lat, lng });
      }
    };

    const fetchDestination = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            destinationAddress
          )}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
        );
        const data = await response.json();
        console.log('Geocoding API response:', data);
    
        if (data.results && data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry.location;
          setDestination({ lat, lng });
        }
      } catch (error) {
        console.error('Error while fetching destination:', error);
      }
    };
    

    if (pickupAddress !== '') {
      fetchPickupLocation();
    }
    if (destinationAddress !== '') {
      fetchDestination();
    }
  }, [pickupAddress, destinationAddress]);

  return (
    <div>
      <PlacesAutocomplete value={pickupAddress} onChange={(handlePickupChange)} onLoad={onPickupLoad}>
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
          <>DeliveryDetails</>
          <p>Distance: {distance}</p>
          <p>Duration: {duration}</p>
        </div>
      )}
    </div>
  );
};

export default Map;

































































