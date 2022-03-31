import React from "react";

const SearchInput = ({
  name,
  value,
  changeHandler,
  placeHolder,
  visbility = "",
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label d-none">
        Email address
      </label>
      <input
        type="text"
        className={`form-control ${visbility}`}
        id={name}
        name={name}
        placeholder={placeHolder}
        value={value}
        onChange={changeHandler}
      />
    </div>
  );
};

export default SearchInput;
