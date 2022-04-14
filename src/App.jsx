import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from "axios";

// Initializing required variables
mapboxgl.accessToken =   "pk.eyJ1IjoidmVkYW50MjI1NCIsImEiOiJjbDFiemtkeHUwMm55M2NtZnEycXFhNGswIn0.KAVQyFcs4tA34VeEQRq11g";

const App = () => {

  // var [map, updateMap] = useState(null);
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [data, updateData] = useState({});
  console.log("datais :", data);
  const [val, updateVal] = useState("");
  const [geoLocation, updateGeoLocation] = useState([0, 0]);
  const [zoom, updateZoom] = useState(-1);
  const [flag, updateFlag] = useState(false);

  var marker = new mapboxgl.Marker();
  console.log("mapcontainer is : ", mapContainer);
  console.log("map is : ", map);
  console.log("marker is : ", marker);
  // console.log("value is : ", val);

  const getValue = (event) => {
    updateVal(event.target.value);
  }

  const getIpData = async (ip) => {
    try {
      console.log(ip.indexOf(" "));
      if (ip === "" || ip.indexOf(" ") >= 0) {
        throw Error;
      }
      console.log(" ip is :", ip);
      console.log(ip.indexOf(" "));
      const result = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_EO5BbLNqVazcN128wyiglwWunW7VT&ipAddress=${ip}&domain=${ip}`);
      // console.log("upcoming ip is :" ,ip);
      console.log(result.data);

      updateData(result.data);
      const { lng, lat } = result.data.location;
      console.log(lng, lat);

      updateGeoLocation([lng, lat])
      updateZoom(9);
      updateFlag(true);
      // shiftMapCenter();
    }
    catch (err) {
      alert("Please enter a valid IP address or domain",);
      updateVal("");
      updateGeoLocation([0, 0])
      updateZoom(-1);
      updateFlag(false);


    }
  }

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.flyTo({
      center: geoLocation,
      zoom: zoom,
      essential: true
    });
    console.log("flag is :", flag);
    if (flag) {
      marker.setLngLat(geoLocation).addTo(map.current);
    }
    else {
      marker.remove();
    }
  }, [geoLocation]);

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: geoLocation,
      zoom: zoom
    });

  }, [])

  return (
    <>
      <div className='container '>
        <div className='upper_Container'>
          <h1 className="heading">IP Address Tracker</h1>
          <div className="get_ip">
            <input type="text" name="ip" id="ip" className="ip_inp" placeholder="Search for any IP address or domain (Avoid Spaces)" value={val} onChange={getValue} />
            <button className="submit_btn" onClick={(event) => { return getIpData(val); }}>
              <ArrowForwardIosIcon className='arrowIcon' />
            </button>
          </div>

          <ul className="details">
            <li className="detail">
              <div className="d_text">
                <span className="d_title">IP ADDRESS</span>
                <p id="ip-address" className="d_content">-</p>
              </div>
            </li>
            <li className="detail">
              <span className="seperator"></span>
              <div className="d_text">
                <span className="d_title">LOCATION</span>
                <p id="location" className="d_content">-</p>
              </div>
            </li>
            <li className="detail">
              <span className="seperator"></span>
              <div className="d_text">
                <span className="d_title">TIMEZONE</span>
                <p id="timezone" className="d_content">-</p>
              </div>
            </li>
            <li className="detail">
              <span className="seperator"></span>
              <div className="d_text">
                <span className="d_title">ISP</span>
                <p id="isp" className="d_content">-</p>
              </div>
            </li>
          </ul>

        </div>

        <div className='lower_Container'>

          <div ref={mapContainer} className="map-container" />


        </div>

      </div>
    </>
  )
}
export default App;