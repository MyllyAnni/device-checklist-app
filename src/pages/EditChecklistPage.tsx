import { Link } from "react-router-dom";

export default function EditChecklistPage() {
  return (
    <div className="page-container">
      <Link to="/add-device">
        <button>← Takaisin</button>
      </Link>

      <h1>Muokkaa checklistiä</h1>

      <div className="checklist-container">
        <div className="task-item">
          <input type="checkbox" />
          <span>Tehtävä 1</span>
        </div>

        <div className="task-item">
          <input type="checkbox" />
          <span>Tehtävä 2</span>
        </div>

        <div className="task-item">
          <input type="checkbox" />
          <span>Tehtävä 3</span>
        </div>

        <div className="task-item">
          <input type="checkbox" />
          <span>Tehtävä 4</span>
        </div>

        <div className="task-item">
          <input type="checkbox" />
          <span>Tehtävä 5</span>
        </div>

        <div className="task-item">
          <input type="checkbox" />
          <span>Tehtävä 6</span>
        </div>

      </div>

      <div className="form-group">
        <label>Uusi tehtävä</label>
        <input
          type="text"
          placeholder="Kirjoita tehtävä..."
        />
      </div>

      <div className="button-group">
        <button>Lisää tehtävä</button>
        <button>Tallenna checklist</button>
      </div>
    </div>
  );
}