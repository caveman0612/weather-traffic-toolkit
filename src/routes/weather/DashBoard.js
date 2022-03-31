import React, { useState } from "react";

const DashBoard = ({ data }) => {
    const[tempData, setTempData] = useState

    handleTempChange(event) {}
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        <div className="col border p-4">
          <h2 className="text-center">Temperture</h2>
          <select onChange={handleTempChange}>
            <option>&#8451;</option>
            <option>&#8457;</option>
          </select>
        </div>
        <div className="col border p-4">
          <h2 className="text-center">Weather</h2>
        </div>
        <div className="col border p-4">
          <h2 className="text-center">Wind</h2>
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
