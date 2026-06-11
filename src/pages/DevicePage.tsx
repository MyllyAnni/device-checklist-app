import { Link } from "react-router-dom";

export default function DevicePage() {
  return (
    <div className="app">
      <Link to="/">
        <button>← Takaisin</button>
      </Link>

      <h1>Nosturi 1</h1>

      <div className="device-details">
        <p>
          <strong>Tyyppi:</strong> Nosturi
        </p>
      </div>

      <hr />

      <h2>Checklist</h2>

      <p>Ei vielä toteutettu</p>
    </div>
  );
}