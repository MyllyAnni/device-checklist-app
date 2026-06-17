import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div className="app">
            <div className="header">
                <h1>Dashboard</h1>

                <Link to="/add-device">
                    <button>Add Device</button>
                </Link>
            </div>

            <Link to="/device">
                <div className="device-card">
                    <h3>Nosturi 1</h3>
                    <p>9 / 9 tehtävää tehty</p>
                </div>
            </Link>

            <div className="device-card">
                <h3>Generaattori 2</h3>
                <p>6 / 9 tehtävää tehty</p>
            </div>

            <Link to="/login">
                <button>Login</button>
            </Link>
        </div>
    );
}