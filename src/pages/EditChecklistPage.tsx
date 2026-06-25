import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function EditChecklistPage() {

    type Task = {
        text: string;
        completed: boolean;
    };

    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        const loadChecklist = async () => {
            try {
                const docRef = doc(db, "defaultChecklist", "checklist");
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();

                    if (data.tasks) {
                        setTasks(data.tasks);
                    }
                }
            } catch (error) {
                console.error("Error loading checklist:", error);
            }
        };

        loadChecklist();
    }, []);

    const saveChecklist = async () => {
        try {
            await setDoc(
                doc(db, "defaultChecklist", "checklist"),
                {
                    tasks: tasks,
                }
            );

            alert("Checklist saved!");
        } catch (error) {
            console.error("Error saving checklist:", error);
        }
    };

    return (
        <div className="page-container">

            <Link to="/add-device" className="back-button">
                <button>← Back</button>
            </Link>



            <h1>Edit Checklist</h1>

            <div className="checklist-container">
                {tasks.map((task, index) => (
                    <div key={index} className="task-item">
                        <span>{task.text}</span>

                        <button
                            onClick={() => {
                                setTasks(tasks.filter((_, i) => i !== index));
                            }}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>

            <div className="form-group">
                <label>New Task</label>

                <input
                    type="text"
                    placeholder="Enter task..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
            </div>

            <div className="button-group">
                <button
                    onClick={() => {
                        if (newTask.trim() === "") return;

                        setTasks([
                            ...tasks,
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

                <button onClick={saveChecklist}>
                    Save Checklist
                </button>
            </div>
        </div>
    );
}