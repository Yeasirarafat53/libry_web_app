import React from 'react';
import GoogleMapReact from 'google-map-react';

const MapSection = () => {
  const center = {
    lat: 37.7749,
    lng: -122.4194
  };
  const zoom = 12;

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <div style={{ height: '300px', width: '80%', margin: 'auto', border: '5px solid #04d3ee4a', borderRadius: '15px' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.PUBLIC_GOOGLE_MAPS_API_KEY }}
            defaultCenter={center}
            defaultZoom={zoom}
          >
            <div
              lat={center.lat}
              lng={center.lng}
              className="bg-red-500 w-8 h-8 rounded-full"
            />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
