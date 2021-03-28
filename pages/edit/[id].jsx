import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/router";

const UserPage = ({ user }) => {
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
      name: user.name || "",
      id: user.id || "",
      Image: user.Image || "",
      address: user.address || "",
    },
    onSubmit: async (values) => {
      let updatedUser = {
        id: values.id,
        name: values.name,
        Image: values.Image,
        address: values.address,
      };
      await fetch("http://localhost:3000/api/userdata", {
        method: "put",
        body: JSON.stringify(updatedUser),
      });
      router.push("/");
    },
    validationSchema: yup.object({
      id: yup.string().trim().required("Enter ID"),
      name: yup.string().trim().required("Enter Name"),
      Image: yup.string().trim().required("Enter ImageURL"),
      address: yup.string().trim(),
    }),
  });

  return (
    <div className="my-2 text-center">
      <label htmlFor="id">
        ID:
        <br />
        <input
          disabled="true"
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
      <label htmlFor="address">
        Address:
        <br />
        <input
          name="address"
          type="text"
          value={values.address}
          {...getFieldProps("address")}
        />
      </label>
      <br />
      <button
        onClick={handleSubmit}
        type="submit"
        className=" my-2 btn btn-primary"
        disabled={!isValid}
      >
        Save User
      </button>
      <hr />
      <br />
    </div>
  );
};

UserPage.getInitialProps = async ({ query }) => {
  const res = await fetch("http://localhost:3000/api/userdata", {
    method: "get",
    headers: {
      getsingleuser: true,
      id: query.id,
    },
  });
  const userdata = await res.json();
  return { user: userdata };
};

export default UserPage;
