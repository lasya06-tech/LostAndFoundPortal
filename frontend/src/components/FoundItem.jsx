import { useEffect, useState } from "react";
import "./FoundItem.css";

function FoundItems() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/items/lost-items"
        );

        const data = await response.json();

        setItems(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchItems();
  }, []);

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="found-page">

      <div className="found-header">

        <span className="tag">
          Community Search
        </span>

        <h1>
          Looking For Your <span>Lost Item?</span>
        </h1>

        <p>
          Browse items reported by the community and contact the finder if the
          item belongs to you.
        </p>

      </div>

      <div className="search-container">

        <input
          type="text"
          placeholder="Search item name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <div className="found-grid">

        {filteredItems.length > 0 ? (

          filteredItems.map((item) => (

            <div className="found-card" key={item._id}>

              <div className="item-icon">
                📦
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <div className="details">
                <span>📍 {item.location}</span>
                <span>📞 {item.contact}</span>
              </div>

              <a
                href={`https://wa.me/91${item.contact}?text=Hi, I believe the item you reported may belong to me. Can we discuss it?`}
                target="_blank"
                rel="noreferrer"
                className="contact-btn"
              >
                Contact Finder
              </a>

            </div>

          ))

        ) : (

          <h2 className="no-items">
            No Items Found
          </h2>

        )}

      </div>

    </div>
  );
}

export default FoundItems;