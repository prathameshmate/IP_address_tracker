import React from 'react';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


const Search = ({ getIpData }) => {
    return (
        <>
            <div className="get_ip">
                <input
                    type="text"
                    name="ip"
                    id="inp"
                    className="ip_inp"
                    placeholder="Search for any IP address or domain (Avoid Spaces)"
                />
                <button
                    className="submit_btn"
                    onClick={() => {
                        return getIpData();
                    }}
                >
                    <ArrowForwardIosIcon className="arrowIcon" />
                </button>
            </div>
        </>
    )
}
export default Search;