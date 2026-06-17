import { Link } from "react-router-dom";

export default function DevicePage() {
  return (
    <div className="app">
      <Link to="/">
        <button>← Takaisin</button>
      </Link>

      <h1>Device Page</h1>

      <div className="device-details">
        <p>
          <strong>Type:</strong> Crane
        </p>
      </div>

      <div className="button-group">
        <button>Muokkaa tietoja</button>
      </div>

      <hr />

      <h2>Checklist</h2>

      <p>Ei vielä toteutettu</p>
    </div>
  );
}