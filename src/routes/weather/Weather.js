import React, { useEffect, useState } from "react";
import DashBoard from "./DashBoard";
import SearchField from "./SearchField";
import { dumbyData } from "../../data";
import { WEATHER_API_KEY } from "../../passwords";

const Weather = () => {
  const _initialFormState = {
    type: "",
    city: "",
    state: "",
    lat: "",
    lon: "",
    zip: "",
  };

  const [newData, setNewData] = useState(dumbyData);
  const [formData, setFormData] = useState(_initialFormState);
  const [searchType, setSearchType] = useState("");
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
    console.log(formData);
    event.preventDefault();
    setSearchObj({ type: searchType, ...formData });
    setFormData(_initialFormState);
  }

  useEffect(() => {
    if (searchObj) {
      const controller = new AbortController();
      if (searchObj.type === "city/state") {
        // console.log("api call", WEATHER_API_KEY);
        const cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchObj.city}&appid=${WEATHER_API_KEY}`;
        fetch(cityUrl, { signal: controller.signal })
          .then((res) => res.json())
          .then(setNewData)
          .catch(console.log);
      }
      return () => controller.abort();
    }
  }, [searchObj]);

  return (
    <div className="">
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
