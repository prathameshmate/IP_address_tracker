import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
//components
import Search from "./Search.jsx";
import Details from "./Details.jsx";
import Map from "./Map.jsx";

const App = () => {
  const [data, updateData] = useState(null);
  const [geoLocation, updateGeoLocation] = useState([0, 0]);
  const [zoom, updateZoom] = useState(-1);
  const [flag, updateFlag] = useState(false);


  const getIpData = async () => {
    try {
      var access = document.getElementById("inp")
      const ip = access.value;

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
      access.value = "";
      updateData(null);
      updateGeoLocation([0, 0]);
      updateZoom(-1);
      updateFlag(false);
    }
  };

  return (
    <>
      <div className="container ">
        <div className="upper_Container">
          <h1 className="heading">IP Address Tracker</h1>
          <Search getIpData={getIpData} />
          <Details data={data} />
        </div>
        <div className="lower_Container">
          <Map
            geoLocation={geoLocation}
            zoom={zoom}
            flag={flag}
          />
        </div>
      </div>
    </>
  );
};
export default App;
