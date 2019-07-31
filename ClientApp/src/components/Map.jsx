import React from 'react';
import {GoogleMap, withScriptjs} from 'react-google-maps';

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{lat: 12, lng: 12}}
      />
  );
}

const WrapperMap = withScriptjs(withGoogleMap(Map));

export default function Map() {
  return (
    <div>
      <WrappedMap googleMapUrl = {`https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: '100%'}}/>}
        containerElement={<div style={{ height: '100%'}}/>}
        mapElement={<div style={{ height: '100%'}}/>}
        />
    </div>;
)
}
