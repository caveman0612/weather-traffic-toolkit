import React, { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

const DashBoard = ({ apiData }) => {
  const _initialTempState = {
    type: "metric",
    metric: <span>{(apiData.main.temp - 273.15).toFixed(0)}&#8451;</span>,
    imperial: (
      <span>
        {(((apiData.main.temp - 273.15) * 9) / 5 + 32).toFixed(0)}&#8457;
      </span>
    ),
  };

  const [tempData, setTempData] = useState(_initialTempState);
  useEffect(() => {
    if (!apiData.dumby) setTempData(_initialTempState);
  }, [apiData]);

  function handleTempChange(event) {
    setTempData({ ..._initialTempState, type: event.target.value });
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">The weather in Seattle</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 gy-5">
        <div className="col border p-4">
          <h2 className="text-center">Temperture</h2>
          <div className="d-flex justify-content-around">
            <select onChange={handleTempChange}>
              <option value="metric">&#8451;</option>
              <option value="imperial">&#8457;</option>
            </select>
            <span>
              {tempData.type === "metric" ? tempData.metric : tempData.imperial}
            </span>
          </div>
        </div>
        <div className="col border p-4 d-flex flex-column align-items-center">
          <h2 className="">Weather</h2>
          <span>{apiData.weather[0].description}</span>
          <img
            src={`http://openweathermap.org/img/wn/${apiData.weather[0].icon}@2x.png`}
            alt="weather symbol"
          />
        </div>
        <div className="col border p-4 d-flex flex-column align-items-center">
          <h2>Wind</h2>
          <p>{(apiData.wind.speed * 2.237).toFixed(1)} mph</p>
          <span className="ps-1">N</span>
          <div className="d-flex align-items-center">
            <span className="me-2">W</span>
            <div
              className="border border-3 rounded-circle d-flex justify-content-center align-items-center"
              style={{
                transform: `rotate(${apiData.wind.deg}deg)`,
                height: "4rem",
                width: "4rem",
              }}
            >
              <BsArrowUp size={30} />
            </div>
            <span className="ms-2">E</span>
          </div>

          <span className="ps-1">S</span>
        </div>
        <div className="col border p-4">
          <h2 className="text-center">Pressure</h2>
        </div>
        <div className="col border p-4">
          <h2 className="text-center">Sunrise & Sunset</h2>
        </div>
        <div className="col border p-4">
          <h2 className="text-center">Humdity</h2>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
