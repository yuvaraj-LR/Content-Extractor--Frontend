import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you’re looking for doesn’t exist.</p>
      <button
        onClick={() => navigate("/")}
        style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFound;
