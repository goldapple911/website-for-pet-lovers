import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './style.css'

// Grab a fresh key before using in the production environment.
mapboxgl.accessToken = "pk.eyJ1IjoibmF0aGFuc3p1IiwiYSI6ImNrZXVhaDl0ZzE4d3kyd3NhOHpnOWZ4NHgifQ.vBkNiiwmqIdTb5eu3c4OEw";

const LocatorMap = () => {
    const mapContainerRef = useRef(null);
    
    const [lng, setLng] = useState(-93.2334946);
    const [lat, setLat] = useState(45.2019585);
    const [zoom, setZoom] = useState(15);
  
    // Initialize map when component mounts
    useEffect(() => {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
      });


    //   TESTING GeoJSON
    var geojson = {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.034084142948,
                38.909671288923
              ]
            },
            "properties": {
              "phoneFormatted": "(202) 234-7336",
              "phone": "2022347336",
              "address": "1471 P St NW",
              "city": "Washington DC",
              "country": "United States",
              "crossStreet": "at 15th St NW",
              "postalCode": "20005",
              "state": "D.C."
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.049766,
                38.900772
              ]
            },
            "properties": {
              "phoneFormatted": "(202) 507-8357",
              "phone": "2025078357",
              "address": "2221 I St NW",
              "city": "Washington DC",
              "country": "United States",
              "crossStreet": "at 22nd St NW",
              "postalCode": "20037",
              "state": "D.C."
            }
          }
        ]
      };

    //   END GeoJSON test
  
      // Add navigation control (the +/- zoom buttons)
    //   map.addControl(new mapboxgl.NavigationControl(), 'top-right');
  
      map.on('move', () => {
        setLng(map.getCenter().lng.toFixed(4));
        setLat(map.getCenter().lat.toFixed(4));
        setZoom(map.getZoom().toFixed(2));
      });
  
      // Clean up on unmount
      return () => map.remove();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
    return (
      <div>
        <div className='sidebarStyle'>
          
        </div>
        <div className='map-container' ref={mapContainerRef} />
      </div>
    );
  };
  
  export default LocatorMap;