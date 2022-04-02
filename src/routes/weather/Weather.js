import React, { useEffect, useState } from "react";
import DashBoard from "./DashBoard";
import SearchField from "./SearchField";
import { dumbyData } from "../../data";
import { WEATHER_API_KEY } from "../../passwords";
// require("dotenv").config();

// import { WEATHER_API_KEY } from "process.env";
// const { WEATHER_API_KEY } = process.env;

const Weather = () => {
  const _initialFormState = {
    type: "",
    city: "",
    lat: "",
    lon: "",
    zip: "",
  };
  // console.log("key", WEATHER_API_KEY);

  const [newData, setNewData] = useState(dumbyData);
  const [formData, setFormData] = useState(_initialFormState);
  const [searchType, setSearchType] = useState("city");
  const [searchObj, setSearchObj] = useState(null);

  function changeHandler(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function searchChangeHandler(event) {
    const value = event.target.value;
    setFormData(_initialFormState);
    setSearchType(value);
  }

  function handleSubmit(event) {
    // console.log(formData, searchType);
    event.preventDefault();
    setSearchObj({ ...formData, type: searchType });
    setFormData(_initialFormState);
  }

  useEffect(() => {
    const controller = new AbortController();
    if (searchObj) {
      // console.log(searchObj);

      if (searchObj.type === "city") {
        // console.log("api call", WEATHER_API_KEY);
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchObj.city}&appid=${WEATHER_API_KEY}`;
        fetch(URL, { signal: controller.signal })
          .then((res) => res.json())
          .then(setNewData)
          .catch(console.log);
      } else if (searchObj.type === "zip") {
        const URL = `https://api.openweathermap.org/data/2.5/weather?zip=${searchObj.zip},us&appid=${WEATHER_API_KEY}`;
        fetch(URL, { signal: controller.signal })
          .then((res) => res.json())
          .then(setNewData)
          .catch(console.log);
      } else if (searchObj.type === "lat/lon") {
        const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${searchObj.lat}&lon=${searchObj.lon}&appid=${WEATHER_API_KEY}`;
        fetch(URL, { signal: controller.signal })
          .then((res) => res.json())
          .then(setNewData)
          .catch(console.log);
      }
    } else {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=seattle&appid=${WEATHER_API_KEY}`;
      fetch(URL, { signal: controller.signal })
        .then((res) => res.json())
        .then(setNewData)
        .catch(console.log);
    }
    return () => controller.abort();
  }, [searchObj]);

  return (
    <div className="bg-light">
      <SearchField
        formData={formData}
        searchType={searchType}
        searchChangeHandler={searchChangeHandler}
        changeHandler={changeHandler}
        handleSubmit={handleSubmit}
      />
      <DashBoard apiData={newData} />
    </div>
  );
};

export default Weather;
