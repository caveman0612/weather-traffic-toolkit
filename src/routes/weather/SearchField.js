import React from "react";
import SearchInput from "./SearchInput";

const SearchField = ({
  formData,
  searchType,
  searchChangeHandler,
  changeHandler,
  handleSubmit,
}) => {
  let formInputs = null;
  if (searchType === "city") {
    formInputs = (
      <>
        <SearchInput
          name={"city"}
          placeHolder={"Input City"}
          value={formData.city}
          changeHandler={changeHandler}
        />
        {/* <SearchInput
          name={"state"}
          placeHolder={"Input State"}
          value={formData.state}
          changeHandler={changeHandler}
        /> */}
      </>
    );
  } else if (searchType === "zip") {
    formInputs = (
      <>
        <SearchInput
          name={"zip"}
          placeHolder={"Input Zip Code"}
          value={formData.zip}
          changeHandler={changeHandler}
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
          changeHandler={changeHandler}
        />
        <SearchInput
          name={"lon"}
          placeHolder={"Input longitude"}
          value={formData.lon}
          changeHandler={changeHandler}
        />
      </>
    );
  } else {
    formInputs = (
      <SearchInput
        name={"null"}
        placeHolder={"null"}
        value={formData.type}
        changeHandler={changeHandler}
        visbility={"invisible"}
      />
    );
  }

  return (
    <div className="d-flex container flex-column flex-sm-row">
      <select onChange={searchChangeHandler} className="m-3">
        <option value="">--Search Type--</option>
        <option value="city">City</option>
        <option value="zip">Zip Code</option>
        {/* <option value="lat/lon">Lat & Lon</option> */}
      </select>
      <form
        onSubmit={handleSubmit}
        className="d-flex mt-3 flex-column flex-sm-row"
      >
        {formInputs}
      </form>
    </div>
  );
};

export default SearchField;
