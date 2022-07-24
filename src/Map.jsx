import React, { useEffect, useRef } from 'react';
import mapboxgl from "mapbox-gl";

// Initializing required variables
mapboxgl.accessToken = process.env.REACT_APP_ACCESS_TOKEN;

const Map = ({ geoLocation, zoom, flag }) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const marker = new mapboxgl.Marker();

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.flyTo({
            center: geoLocation,
            zoom: zoom,
            essential: true,
        });
        if (flag) marker.setLngLat(geoLocation).addTo(map.current);
        // below return statement runs when the app component unmounts
        // when app components unmounts, associated marker is removed from map
        return () => {
            marker.remove();
        };
    }, [geoLocation]);

    useEffect(() => {
        //first time means at the initial rendering the  map will initialized
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: geoLocation,
            zoom: zoom,
        });
    }, []);
    return (
        <>
            <div ref={mapContainer} className="map-container" />
        </>
    )
}
export default Map; 