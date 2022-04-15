import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import axios from "axios";
//components
import Search from "./Search.jsx";
import Details from "./Details.jsx";

// Initializing required variables
mapboxgl.accessToken = "pk.eyJ1IjoidmVkYW50MjI1NCIsImEiOiJjbDFiemtkeHUwMm55M2NtZnEycXFhNGswIn0.KAVQyFcs4tA34VeEQRq11g";

const App = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [data, updateData] = useState(null);
  const [geoLocation, updateGeoLocation] = useState([0, 0]);
  const [zoom, updateZoom] = useState(-1);
  const [flag, updateFlag] = useState(false);

  const marker = new mapboxgl.Marker();

  const getIpData = async (ip) => {
    try {
      if (ip === "" || ip.indexOf(" ") >= 0) {
        throw Error;
      }
      const result = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_ZiotF5KatcvupVRG3vVWPByAMD9r1&ipAddress=${ip}&domain=${ip}`
      );

      updateData(result.data);
      const { lng, lat } = result.data.location;
      updateGeoLocation([lng, lat]);
      updateZoom(9);
      updateFlag(true);
    } catch (err) {
      alert("Please enter a valid IP address or domain");

      updateData(null);
      updateGeoLocation([0, 0]);
      updateZoom(-1);
      updateFlag(false);
    }
  };

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
      <div className="container ">
        <div className="upper_Container">
          <h1 className="heading">IP Address Tracker</h1>
          <Search getIpData={getIpData} />
          <Details data={data} />
        </div>
        <div className="lower_Container">
          <div ref={mapContainer} className="map-container" />
        </div>
      </div>
    </>
  );
};
export default App;
