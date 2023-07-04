import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, Marker, Polyline, useLoadScript } from '@react-google-maps/api';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';
import DeliveryDetails from './DeliveryDetails';

const Map = ({ apiKey, pickupLocation, destination, onPickupLoad, onDestinationLoad }) => {
  const [pickupAddress, setPickupAddress] = useState('');
  const [destinationAddress, setDestinationAddress] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [map, setMap] = useState(null);
  const mapRef = useRef(null);

  const handlePickupChange = (address) => {
    setPickupAddress(address);
  };

  const handleDestinationChange = (address) => {
    setDestinationAddress(address);
  };

  const handleCalculate = async () => {
    try {
      const pickupResults = await geocodeByAddress(pickupAddress);
      const pickupLatLng = await getLatLng(pickupResults[0]);
      const destinationResults = await geocodeByAddress(destinationAddress);
      const destinationLatLng = await getLatLng(destinationResults[0]);

      setPickupAddress(pickupLatLng);
      setDestinationAddress(destinationLatLng);

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
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries: ['places'],
  });

  useEffect(() => {
    if (isLoaded) {
      setPickupAddress('');
      setDestinationAddress('');
    }
  }, [isLoaded]);

  useEffect(() => {
    if (map && pickupLocation && destination) {
      const bounds = new window.google.maps.LatLngBounds();
      bounds.extend(pickupLocation);
      bounds.extend(destination);
      map.fitBounds(bounds);
    }
  }, [map, pickupLocation, destination]);

  const onMapLoad = (mapInstance) => {
    mapRef.current = mapInstance;
    setMap(mapInstance);
  };

  if (loadError) {
    return <div>Error loading Google Maps</div>;
  }

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

      {distance && duration && (
        <div>
                <DeliveryDetails distance={distance} duration={duration} />
          
        </div>
      )}

      {isLoaded && (
        <GoogleMap
          mapContainerStyle={{ height: '400px', width: '100%' }}
          center={pickupLocation}
          zoom={10}
          onLoad={onMapLoad}
        >
          {pickupLocation && <Marker position={pickupLocation} />}
          {destination && <Marker position={destination} />}
          {pickupLocation && destination && <Polyline path={[pickupLocation, destination]} />}
        </GoogleMap>
      )}


    </div>
  );
};

export default Map;




























































