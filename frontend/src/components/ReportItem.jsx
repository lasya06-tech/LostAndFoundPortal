import { useState } from "react";
import "./ReportItem.css";
const API= import.meta.env.VITE_API_URL;

function ReportItem() {
  const [item, setItem] = useState({
    title: "",
    description: "",
    location: "",
    dateLost: "",
    contact: "",
  });

  const handleChange = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${API}/api/items/report-lost`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(item),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Found item reported successfully!");

        setItem({
          title: "",
          description: "",
          location: "",
          dateLost: "",
          contact: "",
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  return (
    <div className="report-page">

      <div className="report-card">

        <div className="report-header">
          <h1>Report Found Item</h1>

          <p>
            Provide details about the item you found so the rightful owner can
            identify and claim it.
          </p>
        </div>

        <form
          className="report-form"
          onSubmit={handleSubmit}
        >

          <div className="input-group">
            <label>Item Name</label>

            <input
              type="text"
              name="title"
              placeholder="Eg. Black Wallet"
              value={item.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Description</label>

            <textarea
              name="description"
              placeholder="Describe the found item..."
              value={item.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Location Found</label>

            <input
              type="text"
              name="location"
              placeholder="Eg. College Library"
              value={item.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Date Found</label>

            <input
              type="date"
              name="dateLost"
              value={item.dateLost}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Your Contact Number</label>

            <input
              type="text"
              name="contact"
              placeholder="Enter your phone number"
              value={item.contact}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="report-btn"
          >
            Report Found Item
          </button>

        </form>

      </div>

    </div>
  );
}

export default ReportItem;