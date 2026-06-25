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

  return (
    <div className="app">
      <Link to="/">
        <button>← Back</button>
      </Link>

      <h1>{device.name}</h1>

      <div className="device-details">
        <p>
          <strong>Type:</strong> {device.type}
        </p>
        <p>
          <strong>Serial Number:</strong>{" "}
          {device.serialNumber}
        </p>
      </div>



      <div className="button-group">
        <button>Edit Information</button>
      </div>

      <hr />

      <h2>Checklist</h2>

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
    </div>
  );
}