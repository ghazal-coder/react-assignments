import React, { useState } from "react";

const MyStateComponent = () => {
  // State to handle form data
  const [formData, setFormData] = useState({});

  // Update state on input change
  const handleFormDataChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Handle form submission
  const handleFormData = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>My State Component</h1>
      <form onSubmit={handleFormData}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleFormDataChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={handleFormDataChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyStateComponent;
