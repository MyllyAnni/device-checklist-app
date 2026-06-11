import { Link } from "react-router-dom";

export default function AddDevicePage() {
  return (
    <div className="app">
      <h1>Lisää laite</h1>

      <div className="form-group">
        <label>Laitteen nimi</label>

        <input
          type="text"
          placeholder="Esim. Nosturi 1"
        />
      </div>

      <div className="form-group">
        <label>Laitetyyppi</label>

        <input
          type="text"
          placeholder="Esim. Nosturi"
        />
      </div>

      <div className="button-group">
        <button>Tallenna</button>

        <Link to="/">
          <button>Takaisin</button>
        </Link>
      </div>
    </div>
  );
}