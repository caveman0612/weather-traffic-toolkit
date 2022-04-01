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
    console.log(formData, searchType);
    event.preventDefault();
    setSearchObj({ ...formData, type: searchType });
    setFormData(_initialFormState);
  }

  useEffect(() => {
    // console.log(searchObj);
    if (searchObj) {
      const controller = new AbortController();
      if (searchObj.type === "city") {
        console.log("api call", WEATHER_API_KEY);
        const cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchObj.city}&appid=${WEATHER_API_KEY}`;
        fetch(cityUrl, { signal: controller.signal })
          .then((res) => res.json())
          .then(setNewData)
          .catch(console.log);
      }
      return () => controller.abort();
    }
  }, [searchObj]);

  useEffect(() => {
    if (!newData.dumby) console.log(newData);
  }, [newData]);

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
