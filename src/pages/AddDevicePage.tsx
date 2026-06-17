import { Link } from "react-router-dom";

export default function AddDevicePage() {
  return (
    <div className="app">
      <h1>Add Device Page</h1>

      <div className="form-group">
        <label>Device</label>

        <input
          type="text"
          placeholder="Esim. Nosturi 1"
        />
      </div>

      <div className="form-group">
        <label>Id</label>

        <input
          type="text"
          placeholder="Esim. Nosturi"
        />
      </div>

      <div className="form-group">
        <label>Type</label>

        <input
          type="text"
          placeholder="Esim. Nosturi 1"
        />
      </div>

      <div className="form-group">
        <label>Seriel Number</label>

        <input
          type="text"
          placeholder="Esim. Nosturi 1"
        />
      </div>

      <div className="button-group">
        <button>Tallenna</button>

        <Link to="/">
          <button>Takaisin</button>
        </Link>
      </div>

      <Link to="/edit-checklist">
        <button>Muokkaa checklistiä</button>
      </Link>

    </div>
  );
}