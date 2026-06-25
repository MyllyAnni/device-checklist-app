import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
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

export default function Dashboard() {

    const [devices, setDevices] = useState<Device[]>([]);

    useEffect(() => {
        const loadDevices = async () => {
            try {
                const querySnapshot = await getDocs(
                    collection(db, "devices")
                );

                const loadedDevices: Device[] =
                    querySnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    })) as Device[];

                setDevices(loadedDevices);
            } catch (error) {
                console.error(
                    "Error loading devices:",
                    error
                );
            }
        };

        loadDevices();
    }, []);

    return (
        <div className="app">
            <div className="page-header">

                <h1>Dashboard</h1>

                <div className="button-group">
                    <Link to="/add-device">
                        <button>Add Device</button>
                    </Link>
                </div>

                {devices.map((device) => (
                    <Link
                        key={device.id}
                        to={`/device/${device.id}`}
                    >

                        <div className="device-card">
                            <h3>{device.name}</h3>

                            <p>
                                {
                                    device.tasks.filter(
                                        (task) => task.completed
                                    ).length
                                }
                                {" / "}
                                {device.tasks.length}
                                {" tasks done"}
                            </p>
                        </div>
                    </Link>
                ))}

                <Link to="/login">
                    <button>Login</button>
                </Link>
            </div>
        </div>
    );
}