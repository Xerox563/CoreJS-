import React, { useState } from "react";

const GeolocationAPI = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    setLoading(true);
    setError("");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLoading(false);
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
        });
      },
      (err) => {
        setLoading(false);
        setError(`Error: ${err.message}`);
      }
    );
  };

  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#f2f2f2",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "400px",
        margin: "40px auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2
        style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}
      >
        🌍 Geolocation API
      </h2>

      <button
        onClick={getLocation}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "10px 16px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Get Location
      </button>

      {loading && (
        <p style={{ marginTop: "10px", color: "#555" }}>Fetching location...</p>
      )}

      {location && (
        <div style={{ marginTop: "15px", color: "green" }}>
          <p>
            <strong>Latitude:</strong> {location.latitude}
          </p>
          <p>
            <strong>Longitude:</strong> {location.longitude}
          </p>
          <p>
            <strong>Accuracy:</strong> {location.accuracy} meters
          </p>
        </div>
      )}

      {error && <p style={{ marginTop: "15px", color: "red" }}>{error}</p>}
    </div>
  );
};

export default GeolocationAPI;

/*

-> Provides users latitude and longitude.(needs browsers permision)

navigator.geolocation.getCurrentPosition(successCallback, errorCallback):
successCallback gets the position data, which includes latitude, longitude, and accuracy.
errorCallback handles any error (e.g. if user denies permission).
*/
