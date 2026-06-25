import { useState } from "react";
import { Link } from "react-router-dom";
import { collection, addDoc, getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

type Task = {
  text: string;
  completed: boolean;
};

export default function AddDevicePage() {
  const [addDefaultChecklist, setAddDefaultChecklist] = useState(true);
  const [newTask, setNewTask] = useState("");
  const [deviceName, setDeviceName] = useState("");
  const [deviceType, setDeviceType] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [additionalTasks, setAdditionalTasks] = useState<Task[]>([]);

  const saveDevice = async () => {
    try {
      let tasks: Task[] = [];

      if (addDefaultChecklist) {
        const checklistRef = doc(
          db,
          "defaultChecklist",
          "checklist"
        );

        const checklistSnap =
          await getDoc(checklistRef);

        if (checklistSnap.exists()) {
          tasks = (checklistSnap.data().tasks || []) as Task[];
        }
      }

      tasks = [...tasks, ...additionalTasks];

      await addDoc(
        collection(db, "devices"),
        {
          name: deviceName,
          type: deviceType,
          serialNumber: serialNumber,
          tasks: tasks,
        }
      );

      alert("Device saved!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app">

      <div className="back-button">
        <Link to="/">
          <button>← Back</button>
        </Link>
      </div>

      <h1>Add Device Page</h1>

      <div className="form-group">
        <label>Device Name</label>

        <input
          type="text"
          placeholder="Crane 1"
          value={deviceName}
          onChange={(e) => setDeviceName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Type</label>

        <input
          type="text"
          placeholder="Esim. Nosturi 1"
          value={deviceType}
          onChange={(e) => setDeviceType(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Serial Number</label>

        <input
          type="text"
          placeholder="Esim. Nosturi 1"
          value={serialNumber}
          onChange={(e) => setSerialNumber(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>
          <input
            type="checkbox"
            checked={addDefaultChecklist}
            onChange={(e) =>
              setAddDefaultChecklist(e.target.checked)
            }
          />

          Add Default Checklist
        </label>
      </div>

      <h2>Additional Tasks</h2>

      <div className="form-group">
        <input
          type="text"
          placeholder="Enter task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      </div>

      <button
        onClick={() => {
          if (newTask.trim() === "") return;

          setAdditionalTasks([
            ...additionalTasks,
            {
              text: newTask,
              completed: false,
            },
          ]);

          setNewTask("");
        }}
      >
        Add Task
      </button>

      <div className="checklist-container">
        {additionalTasks.map((task, index) => (
          <div key={index} className="task-item">
            <span>{task.text}</span>

            <button
              onClick={() => {
                setAdditionalTasks(
                  additionalTasks.filter(
                    (_, i) => i !== index
                  )
                );
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <div className="button-group">
        <Link to="/edit-checklist">
          <button>Edit Checklist</button>
        </Link>

        <button onClick={saveDevice}>
          Save Device
        </button>

      </div>

    </div>
  );
}