import React, { useState } from "react";
import SearchInput from "./SearchInput";

const SearchField = () => {
  const _initialFormState = {
    type: "",
    city: "",
    state: "",
    lat: "",
    lon: "",
    zip: "",
  };
  let formInputs = null;
  const [formData, setFormData] = useState(_initialFormState);
  const [searchType, setSearchType] = useState("");

  function formChangeHandler(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function searchChangeHandler(event) {
    const value = event.target.value;
    setFormData(_initialFormState);
    setSearchType(value);
  }

  if (searchType === "city/state") {
    formInputs = (
      <>
        <SearchInput
          name={"city"}
          placeHolder={"Input City"}
          value={formData.city}
          changeHandler={formChangeHandler}
        />
        <SearchInput
          name={"state"}
          placeHolder={"Input State"}
          value={formData.state}
          changeHandler={formChangeHandler}
        />
      </>
    );
  } else if (searchType === "zip") {
    formInputs = (
      <>
        <SearchInput
          name={"zip"}
          placeHolder={"Input Zip Code"}
          value={formData.zip}
          changeHandler={formChangeHandler}
        />
      </>
    );
  } else if (searchType === "lat/lon") {
    formInputs = (
      <>
        <SearchInput
          name={"lat"}
          placeHolder={"Input Latitude"}
          value={formData.lat}
          changeHandler={formChangeHandler}
        />
        <SearchInput
          name={"lon"}
          placeHolder={"Input longitude"}
          value={formData.lon}
          changeHandler={formChangeHandler}
        />
      </>
    );
  } else {
    formInputs = (
      <SearchInput
        name={"null"}
        placeHolder={"null"}
        value={formData.type}
        changeHandler={formChangeHandler}
        visbility={"invisible"}
      />
    );
  }

  return (
    <div className="d-flex">
      <select onChange={searchChangeHandler} className="m-3">
        <option value="">--Search Type--</option>
        <option value="city/state">city & state</option>
        <option value="zip">Zip Code</option>
        <option value="lat/lon">Lat & Lon</option>
      </select>
      <form className="d-flex mt-3">{formInputs}</form>
    </div>
  );
};

export default SearchField;
