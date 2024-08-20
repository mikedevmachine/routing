import React, { useState, useEffect } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import backgroundImage from "./bg.png";

export default function TravelLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={containerStyle}>
      <div style={blurOverlayStyle}></div>
      <div style={contentStyle}>
        <h2 style={headingStyle}>Your journey is loading...</h2>
        <PropagateLoader
          color="#50f9f4"
          loading={loading}
          cssOverride={loaderStyle}
          size={15}
          speedMultiplier={1}
        />
      </div>
    </div>
  );
}

// Styles
const containerStyle = {
  backgroundImage: `url(${backgroundImage})`, // Use the uploaded image as background
  backgroundSize: "cover", // Ensure the image covers the whole page
  backgroundPosition: "center",
  height: "100vh", // Full height to cover the screen
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
};

const blurOverlayStyle = {
  position: "absolute", // Position it absolutely within the container
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(255, 255, 255, 0.2)", // Slightly transparent overlay
  backdropFilter: "blur(10px)", // Apply blur effect to the entire screen width
  zIndex: 1, // Ensure the blur overlay is below the content
};

const contentStyle = {
  position: "relative", // Position content above the blur
  zIndex: 2, // Ensure the content is on top of the blur
  textAlign: "center",
};

const headingStyle = {
  fontFamily: "'Roboto', sans-serif",
  fontSize: "28px",
  color: "#fff", // White text for contrast against the background
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Add some text shadow for readability
};

const loaderStyle = {
  display: "block",
  margin: "20px auto",
};

const buttonStyle = {
  marginTop: "20px",
  padding: "10px 20px",
  backgroundColor: "#00796B", // Teal color to match the theme
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};
