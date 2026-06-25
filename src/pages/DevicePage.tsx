import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

type Task = {
  text: string;
  completed: boolean; 
};

type Device = {
  id: string;
  name: string;
  type: string;
  serialNumber: string;
  tasks: Task[];
};


export default function DevicePage() {

  const { id } = useParams();

  const [device, setDevice] =
    useState<Device | null>(null);
  const [editMode, setEditMode] =
    useState(false);
  const [editedName, setEditedName] =
    useState("");
  const [editedType, setEditedType] =
    useState("");
  const [editedSerialNumber, setEditedSerialNumber] =
    useState("");
  const [editedTasks, setEditedTasks] =
    useState<Task[]>([]);
  const [newTaskText, setNewTaskText] =
    useState("");

  useEffect(() => {
    const loadDevice = async () => {
      try {
        if (!id) return;

        const docRef = doc(
          db,
          "devices",
          id
        );

        const docSnap =
          await getDoc(docRef);

        if (docSnap.exists()) {
          setDevice({
            id: docSnap.id,
            ...docSnap.data(),
          } as Device);
        }
      } catch (error) {
        console.error(
          "Error loading device:",
          error
        );
      }
    };

    loadDevice();
  }, [id]);

  useEffect(() => {
    if (!device) return;

    setEditedName(device.name);
    setEditedType(device.type);
    setEditedSerialNumber(device.serialNumber);
    setEditedTasks(device.tasks ?? []);
  }, [device]);

  if (!device) {
    return <p>Loading...</p>;
  }

  const toggleTask = async (
    taskIndex: number
  ) => {
    if (!device) return;

    try {
      const updatedTasks =
        device.tasks.map((task, index) => {
          if (index === taskIndex) {
            return {
              ...task,
              completed: !task.completed,
            };
          }

          return task;
        });

      await updateDoc(
        doc(db, "devices", device.id),
        {
          tasks: updatedTasks,
        }
      );

      setDevice({
        ...device,
        tasks: updatedTasks,
      });

    } catch (error) {
      console.error(
        "Error updating task:",
        error
      );
    }
  };

  const saveDevice = async () => {
    try {
      await updateDoc(
        doc(db, "devices", device.id),
        {
          name: editedName,
          type: editedType,
          serialNumber: editedSerialNumber,
          tasks: editedTasks,
        }
      );

      setDevice({
        ...device,
        name: editedName,
        type: editedType,
        serialNumber: editedSerialNumber,
        tasks: editedTasks,
      });
      setEditMode(false);
      alert("Device updated!");
    } catch (error) {
      console.error(
        "Error saving device:",
        error
      );
    }
  };

  const toggleEditedTask =
    (taskIndex: number) => {
      setEditedTasks((current) =>
        current.map((task, index) => {
          if (index === taskIndex) {
            return {
              ...task,
              completed: !task.completed,
            };
          }

          return task;
        })
      );
    };

  const updateEditedTaskText = (
    taskIndex: number,
    text: string
  ) => {
    setEditedTasks((current) =>
      current.map((task, index) => {
        if (index === taskIndex) {
          return {
            ...task,
            text,
          };
        }

        return task;
      })
    );
  };

  const deleteEditedTask =
    (taskIndex: number) => {
      setEditedTasks((current) =>
        current.filter((_, index) => index !== taskIndex)
      );
    };

  const addEditedTask = () => {
    if (newTaskText.trim() === "") return;

    setEditedTasks((current) => [
      ...current,
      {
        text: newTaskText,
        completed: false,
      },
    ]);
    setNewTaskText("");
  };

  return (
    <div className="app">
      <Link to="/">
        <button>← Back</button>
      </Link>

      {editMode ? (
        <h1>Edit Device</h1>
      ) : (
        <h1>{device.name}</h1>
      )}

      <div className="device-details">
        {editMode ? (
          <>
            <div className="form-group">
              <label>Device Name</label>
              <input
                type="text"
                value={editedName}
                onChange={(e) =>
                  setEditedName(e.target.value)
                }
              />
            </div>

            <div className="form-group">
              <label>Type</label>
              <input
                type="text"
                value={editedType}
                onChange={(e) =>
                  setEditedType(e.target.value)
                }
              />
            </div>

            <div className="form-group">
              <label>Serial Number</label>
              <input
                type="text"
                value={editedSerialNumber}
                onChange={(e) =>
                  setEditedSerialNumber(e.target.value)
                }
              />
            </div>
          </>
        ) : (
          <>
            <p>
              <strong>Type:</strong> {device.type}
            </p>
            <p>
              <strong>Serial Number:</strong>{" "}
              {device.serialNumber}
            </p>
          </>
        )}
      </div>



      <div className="button-group">
        {editMode ? (
          <>
            <button onClick={saveDevice}>
              Save Changes
            </button>
            <button
              onClick={() => {
                setEditMode(false);
                setEditedName(device.name);
                setEditedType(device.type);
                setEditedSerialNumber(device.serialNumber);
                setEditedTasks(device.tasks ?? []);
              }}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setEditMode(true)}
          >
            Edit Device
          </button>
        )}
      </div>

      {editMode ? (
        <>
          <div className="checklist-container">
            {editedTasks.map((task, index) => (
              <div
                key={index}
                className="task-item"
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() =>
                    toggleEditedTask(index)
                  }
                />

                <input
                  type="text"
                  value={task.text}
                  onChange={(e) =>
                    updateEditedTaskText(
                      index,
                      e.target.value
                    )
                  }
                />

                <button
                  onClick={() =>
                    deleteEditedTask(index)
                  }
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Add new task"
              value={newTaskText}
              onChange={(e) =>
                setNewTaskText(e.target.value)
              }
            />
          </div>

          <div className="button-group">
            <button onClick={addEditedTask}>
              Add Task
            </button>
          </div>
        </>
      ) : (
        <div className="checklist-container">
          {device.tasks.map((task, index) => (
            <div
              key={index}
              className="task-item"
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() =>
                  toggleTask(index)
                }
              />

              <span>{task.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}