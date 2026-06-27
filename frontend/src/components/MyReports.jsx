import { useEffect, useState } from "react";
import "./MyReports.css";

function MyReports() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/items/my-reports",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        const data = await response.json();

        if (response.ok) {
          setItems(data);
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.log(error);
        alert("Server Error");
      }
    };

    fetchReports();
  }, []);

  return (
    <div className="myreports-page">

      <h1>My Reported Items</h1>

      <p className="report-subtitle">
        These are the items you have reported as found.
      </p>

      {items.length === 0 ? (
        <h2 className="no-items">
          You haven't reported any items yet.
        </h2>
      ) : (
        <div className="reports-grid">

          {items.map((item) => (

            <div className="report-card" key={item._id}>

              <div className="item-icon">
                📦
              </div>

              <h2>{item.title}</h2>

              <p>{item.description}</p>

              <div className="details">
                <span>📍 {item.location}</span>
                <span>📞 {item.contact}</span>
              </div>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}

export default MyReports;