import React, { useState } from "react";
import * as Yup from "yup";

const Input = () => {
  const [error, setError] = useState(null);
  const [response, setResponse] = useState([]);
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [copiedIndex, setCopiedIndex] = useState(null); // Track the index of the copied URL

  // Validation schema
  const validationSchema = Yup.object().shape({
    url: Yup.string().url("Invalid URL").required("URL is required"),
  });

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidationError("");
    setIsLoading(true);

    try {
      await validationSchema.validate({ url }, { abortEarly: false });

      const res = await fetch("https://weblifyurl.vercel.app/urlSubmit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ longUrl: url }),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await res.json();
      setResponse([...response, result.shortUrl]); // Add new shortened URL to the list
      setError(null);
      setUrl(""); // Clear the input field
      console.log("Shortened URL:", result.shortUrl);
    } catch (error) {
      if (error.name === "ValidationError") {
        setValidationError(error.errors[0]);
      } else {
        setError(error.message);
        setResponse([]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (link, index) => {
    navigator.clipboard.writeText(link);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000); // Reset the copied state after 2 seconds
  };

  return (
    <div className="font-abc pb-20">
      <i className="text-center text-2xl font-semibold">
        <p>Enter Your Long URL Here</p>
      </i>
      <div className="bg-blue bg-gray-900 rounded-md mt-5 ml-5 mr-10 md:ml-40 md:mr-40 p-10 flex-nowrap">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="url"
            placeholder="Shorten a link here..."
            value={url}
            onChange={handleChange}
            className={`md:ml-8 py-3 pl-3 w-full md:w-3/4 rounded-md ${
              validationError ? "border-red-500 border-2" : ""
            }`}
          />
          <button
            type="submit"
            className="btn mt-3 text-white w-full md:w-40 md:ml-3 md:px-6 rounded-md bg-blue-300"
            disabled={isLoading}
          >
            {isLoading ? "Shortening..." : "Shorten It!"}
          </button>
        </form>
        {validationError && (
          <p className="text-red-500 mt-4 ml-10">{validationError}</p>
        )}
        {error && <p className="text-red-500 mt-4 ml-10">{error}</p>}
        {response.length > 0 && (
          <div className="text-green-500 pt-3 pl-1 md:pl-3 md:font-semibold mt-4 bg-white md:ml-8 rounded-md md:mr-72">
            {response.map((link, index) => (
              <div key={index} className="mb-2 md:flex">
                <p>{link}</p>
                <button
                  onClick={() => handleCopy(link, index)}
                  className="text-white md:ml-48 mb-5 px-6 py-1 hover:bg-blue-800 bg-blue-500 rounded-lg"
                >
                  {copiedIndex === index ? "Copied!" : "Copy"}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
