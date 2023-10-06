import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TicketPage = () => {
  const [formData, setFormData] = useState({
    status: "not uploaded",
  });
  const editMode = false;

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!editMode) {
      const response = await axios.post("http://localhost:8000/tickets", {
        formData,
      });
      console.log("posting");
      const success = response.status === 200;
      if (success) {
        navigate("/");
      }
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const categories = ["test1", "test2"];

  console.log(formData);

  return (
    <div className="ticket">
      <h1>{editMode ? "Update your Ticket" : "Create a Ticket"}</h1>
      <form onSubmit={handleSubmit}>
        <section>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={handleChange}
            required={true}
            value={formData.title}
          />
          <label htmlFor="desc">Description</label>
          <input
            id="desc"
            name="desc"
            type="text"
            onChange={handleChange}
            required={true}
            value={formData.desc}
          />
          <label>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            {categories?.map((category, _index) => {
              return (
                <option key={_index} value={category}>
                  {category}
                </option>
              );
            })}
          </select>

          <label htmlFor="new-category">New Category</label>
          <input
            id="new-category"
            name="category"
            type="text"
            onChange={handleChange}
            value={formData.category}
          />
          {editMode && (
            <>
              <label>Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option
                  selected={formData.status === "uploaded"}
                  value="uploaded"
                >
                  Uploaded
                </option>
                <option selected={formData.status === "hidden"} value="hidden">
                  hidden
                </option>
              </select>
            </>
          )}
          <input type="submit" />
          <label htmlFor="preview">preview</label>
          <input
            id="preview"
            name="preview"
            type="url"
            onChange={handleChange}
            required={true}
            value={formData.preview}
          />
          <div className="img-preview">
            {formData.preview && <img src={formData.preview} alt="img" />}
          </div>
        </section>
      </form>
    </div>
  );
};

export default TicketPage;
