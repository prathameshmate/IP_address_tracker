import React, { useState } from 'react';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


const Search = ({ getIpData }) => {
    const [val, updateVal] = useState("");

    const getValue = (event) => {
        updateVal(event.target.value);
    };

    return (
        <>
            <div className="get_ip">
                <input
                    type="text"
                    name="ip"
                    id="ip"
                    className="ip_inp"
                    placeholder="Search for any IP address or domain (Avoid Spaces)"
                    value={val}
                    onChange={getValue}
                />
                <button
                    className="submit_btn"
                    onClick={() => {
                        return getIpData(val);
                    }}
                >
                    <ArrowForwardIosIcon className="arrowIcon" />
                </button>
            </div>
        </>
    )
}
export default Search;