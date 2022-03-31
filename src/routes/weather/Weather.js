import React from "react";
import DashBoard from "./DashBoard";
import SearchField from "./SearchField";
import { data } from "../../data";

const Weather = () => {
  return (
    <div className="">
      <SearchField />
      <DashBoard data={data} />
    </div>
  );
};

export default Weather;
