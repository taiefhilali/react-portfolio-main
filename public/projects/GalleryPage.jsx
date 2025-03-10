import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const GalleryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { images, title } = location.state || { images: [], title: "Gallery" };

  console.log(images);  // Check if images are received correctly

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
    <h2
  style={{
    fontSize: "2.5rem",
    fontWeight: "600",
    color: "#333",
    marginBottom: "30px",
    fontFamily: "'Roboto', sans-serif",
    textAlign: "center",
  }}
>
  {title} - Image Gallery
</h2>

<button
  onClick={() => navigate(-1)}
  style={{
    marginBottom: "150px",
    cursor: "pointer",
    backgroundColor: "#adaca7", // gray background
    color: "white", // White text
    border: "none", // No border
    padding: "12px 25px", // Comfortable padding
    fontSize: "16px", // Standard font size
    fontWeight: "500", // Slightly bold text
    borderRadius: "8px", // Rounded corners
    transition: "all 0.3s ease-in-out", // Smooth transition
    boxShadow: "0px 6px 15px rgba(0, 123, 255, 0.2)", // Soft shadow for depth
    textAlign: "center", // Ensure text is centered
  }}
  onMouseEnter={(e) => {
    e.target.style.transform = "scale(1.05)";
    e.target.style.boxShadow = "0px 8px 20px rgba(0, 123, 255, 0.3)";
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = "scale(1)";
    e.target.style.boxShadow = "0px 6px 15px rgba(0, 123, 255, 0.2)";
  }}
>
  Go Back
</button>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "10px" }}>
        {images && images.length > 0 ? (
          images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Demo ${index + 1}`}
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          ))
        ) : (
          <p>No images to display.</p>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
