import React from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as yup from "yup";

const AddUser = () => {
  const router = useRouter();

  const {
    errors,
    handleSubmit,
    isValid,
    touched,
    setFieldTouched,
    values,
    setValues,
    setFieldValue,
    getFieldProps,
  } = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      id: "",
      Image: "",
    },
    onSubmit: async (values) => {
      let newUser = {
        id: values.id,
        name: values.name,
        Image: values.Image,
      };
      await fetch("http://localhost:3000/api/userdata", {
        method: "post",
        body: JSON.stringify(newUser),
      });
      router.reload();
    },
    validationSchema: yup.object({
      id: yup.string().trim().required("Enter ID"),
      name: yup.string().trim().required("Enter Name"),
      Image: yup.string().trim().required("Enter ImageURL"),
    }),
  });
  return (
    <div className="my-2 text-center">
      <label htmlFor="id">
        ID:
        <br />
        <input
          name="id"
          type="text"
          value={values.id}
          {...getFieldProps("id")}
        />
      </label>
      <br />
      <label htmlFor="name">
        Name
        <br />
        <input
          name="name"
          type="text"
          value={values.name}
          {...getFieldProps("name")}
        />
      </label>
      <br />
      <label htmlFor="Image">
        ImageURL:
        <br />
        <input
          name="Image"
          type="text"
          value={values.Image}
          {...getFieldProps("Image")}
        />
      </label>
      <br />
      <button
        onClick={handleSubmit}
        type="submit"
        className=" my-2 btn btn-success"
        disabled={!isValid}
      >
        Add User
      </button>
      <hr />
      <br />
    </div>
  );
};

export default AddUser;
