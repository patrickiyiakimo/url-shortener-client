import React, { useState } from "react";
import { Helmet } from "react-helmet";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory()
  

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setError(null);

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      await postData();
      history.push("/")
    } catch (error) {
      if (error.name === "ValidationError") {
        const validationErrors = {};
        error.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
        });
        setErrors(validationErrors);
      } else {
        setError(error.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const postData = async () => {
    try {
      const res = await fetch("https://weblifyurl.vercel.app/userLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.text(); // Read response as text for debugging
        throw new Error(errorData || "Network response was not ok");
      }

      const result = await res.json();
      setResponse(result.message);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="mt-28 md:mt-40 font-abc ml-2 md:ml-20 md:flex">
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className={`block border-2 rounded-md w-96 py-3 mt-24 ${
              errors.email ? "border-red-500" : "border-gray-500"
            }`}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className={`block border-2 rounded-md w-96 py-3 mt-8 ${
              errors.password ? "border-red-500" : "border-gray-500"
            }`}
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}

          <button
            type="submit"
            className="btn mt-8 w-96 md:px-20 rounded-md text-white hover:text-gray-600 bg-blue-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="loading loading-spinner loading-md"></span>
            ) : (
              "Log In"
            )}
          </button>
        </form>
        {error && (
          <p className="text-red-100 bg-red-500 p-2 rounded-md font-semibold text-xl mt-4">
            {error}
          </p>
        )}
        {response && (
          <p className="text-green-100 p-2 rounded-md bg-green-500 mt-4 text-xl font-semibold">
            {response}
          </p>
        )}
      </div>
      <div>
        <img
          src="/images/undraw_Programming_re_kg9v (1).png"
          alt="programmer's image"
          className="md:w-2/3 md:ml-52 rounded-t-full mt-28 md:mt-1 mb-40"
        />
      </div>
      <Helmet>
        <title>Weblify | Log In</title>
        <meta
          name="Log in page"
          content="Enjoy unlimited access to our URL Shortner App"
        />
      </Helmet>
    </div>
  );
};

export default Login;
