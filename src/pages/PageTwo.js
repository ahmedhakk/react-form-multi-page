// Example for PageTwo.js
import React from "react";

const PageTwo = ({ register, errors, formData }) => {
  return (
    <div>
      <input
        name="lastName"
        {...register("lastName")}
        defaultValue={formData.lastName}
      />
      {errors?.lastName && <span>This field is required</span>}
    </div>
  );
};

export default PageTwo;
