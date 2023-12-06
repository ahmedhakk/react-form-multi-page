import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PageOne from "../pages/PageOne";
import PageTwo from "../pages/PageTwo";

const MultiPageForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { handleSubmit, register, errors, watch } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  // Storing form data
  const formData = watch();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {currentPage === 1 && (
        <PageOne register={register} errors={errors} formData={formData} />
      )}
      {currentPage === 2 && (
        <PageTwo register={register} errors={errors} formData={formData} />
      )}

      {currentPage > 1 && (
        <button type="button" onClick={prevPage}>
          Previous
        </button>
      )}
      {currentPage < 2 ? (
        <button type="button" onClick={nextPage}>
          Next
        </button>
      ) : (
        <button type="submit">Submit</button>
      )}
    </form>
  );
};

export default MultiPageForm;
