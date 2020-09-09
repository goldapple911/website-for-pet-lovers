import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './style.css'

// Grab a fresh key before using in the production environment.
mapboxgl.accessToken = "pk.eyJ1IjoibmF0aGFuc3p1IiwiYSI6ImNrZXVhaDl0ZzE4d3kyd3NhOHpnOWZ4NHgifQ.vBkNiiwmqIdTb5eu3c4OEw";

const LocatorMap = () => {
    const mapContainerRef = useRef(null);
  
    const [lng, setLng] = useState(5);
    const [lat, setLat] = useState(34);
    const [zoom, setZoom] = useState(1.5);
  
    // Initialize map when component mounts
    useEffect(() => {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
      });
  
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