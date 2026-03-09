import React, { useState } from "react";
import InputGroup from "./InputGroup";

function Form() {
  const [formData, setFormData] = useState({
    original_title: "",
    poster_path: "",
    original_language: "",
    release_date: "",
    vote_average: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.original_title.length < 1) {
      alert("title must be at least 3 characters long.");
      return;
    }

    if (formData.poster_path.length < 3) {
      alert("path must be at least 3 characters long.");
      return;
    }
    if (formData.original_language.length < 3) {
      alert("language must be at least 3 characters long.");
      return;
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(formData);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://mimic-server-api.vercel.app/movies", requestOptions)
      .then((response) => response.text())
      .then((result) => alert("Movie has been updated to API successfully!"))
      .catch((error) => alert("error", error));
  };
  return (
    <>
      <div className="flex items-center justify-center mt-10">
        <div className="bg-slate-600 shadow-lg rounded-xl p-8 w-full max-w-md border border-gray-500">
          <h1 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-orange-300 to-orange-700 bg-clip-text text-transparent">
            Add Movie to API
          </h1>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <InputGroup
              label="Title"
              name="original_title"
              placeholder="Enter movie title"
              value={formData.original_title}
              onChange={handleChange}
            />

            <InputGroup
              label="Image URL"
              name="poster_path"
              placeholder="Enter image path or URL"
              value={formData.poster_path}
              onChange={handleChange}
            />

            <InputGroup
              label="Language"
              name="original_language"
              placeholder="Enter language"
              value={formData.original_language}
              onChange={handleChange}
            />

            <InputGroup
              label="Release Date"
              name="release_date"
              type="date"
              value={formData.release_date}
              onChange={handleChange}
            />

            <InputGroup
              label="Vote Average"
              name="vote_average"
              type="number"
              placeholder="0 - 10"
              value={formData.vote_average}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
