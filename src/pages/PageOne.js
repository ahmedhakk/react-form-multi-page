// Example for PageOne.js
import React from "react";

const PageOne = ({ register, errors, formData }) => {
  return (
    <div>
      <input
        name="firstName"
        {...register("firstName")}
        defaultValue={formData.firstName}
      />
      {errors?.firstName && <span>This field is required</span>}
    </div>
  );
};

export default PageOne;
