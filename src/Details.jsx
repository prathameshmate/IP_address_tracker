import React from 'react';

const Details = ({ data, zoom }) => {
    return (
        <>
            <ul className="details">
                <li className="detail">
                    <div className="d_text">
                        <span className="d_title">IP ADDRESS</span>
                        <p id="ip-address" className="d_content">
                            {(data === null) ?`-`: `${data.ip}`}
                        </p>
                    </div>
                </li>
                <li className="detail">
                    <span className="seperator"></span>
                    <div className="d_text">
                        <span className="d_title">LOCATION</span>
                        <p id="location" className="d_content">
                            {(data === null) ?`-`: `${data.location.city } , ${data.location.region} , ${data.location.country}` }
                        </p>
                    </div>
                </li>
                <li className="detail">
                    <span className="seperator"></span>
                    <div className="d_text">
                        <span className="d_title">TIMEZONE</span>
                        <p id="timezone" className="d_content">
                            {(data === null) ?`-`: data.location.timezone}

                        </p>
                    </div>
                </li>
                <li className="detail">
                    <span className="seperator"></span>
                    <div className="d_text">
                        <span className="d_title">ISP</span>
                        <p id="isp" className="d_content">
                        {(data === null) ?`-`: data.isp}

                        </p>
                    </div>
                </li>
            </ul>
        </>
    )
}
export default Details;