import { Link } from "react-router-dom";

export default function EditChecklistPage() {
    return (
        <div className="page-container">
            <Link to="/add-device" className="back-button">
                <button>← Back</button>
            </Link>



            <h1>Edit Checklist</h1>

            <div className="checklist-container">
                <div className="task-item">
                    <input type="checkbox" />
                    <span>Task 1</span>
                </div>

                <div className="task-item">
                    <input type="checkbox" />
                    <span>Task 2</span>
                </div>

                <div className="task-item">
                    <input type="checkbox" />
                    <span>Task 3</span>
                </div>

                <div className="task-item">
                    <input type="checkbox" />
                    <span>Task 4</span>
                </div>

                <div className="task-item">
                    <input type="checkbox" />
                    <span>Task 5</span>
                </div>

                <div className="task-item">
                    <input type="checkbox" />
                    <span>Task 6</span>
                </div>

            </div>

            <div className="form-group">
                <label>New Task</label>
                <input
                    type="text"
                    placeholder="Enter task..."
                />
            </div>

            <div className="button-group">
                <button>Add Task</button>
                <button>Save Checklist</button>
            </div>
        </div>
    );
}