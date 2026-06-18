import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div className="app">
            <div className="page-header">

                <h1>Dashboard</h1>

                <div className="button-group">
                    <Link to="/add-device">
                        <button>Add Device</button>
                    </Link>
                </div>

                <Link to="/device">
                    <div className="device-card">
                        <h3>Nosturi 1</h3>
                        <p>9 / 9 tasks done</p>
                    </div>
                </Link>

                <Link to="/device">
                    <div className="device-card">
                        <h3>Laite 12</h3>
                        <p>5 / 9 tasks done</p>
                    </div>
                </Link>

                <Link to="/device">
                    <div className="device-card">
                        <h3>Laite 99</h3>
                        <p>3 / 9 tasks done</p>
                    </div>
                </Link>

                <Link to="/device">
                    <div className="device-card">
                        <h3>Laite 22</h3>
                        <p>0 / 9 tasks done</p>
                    </div>
                </Link>

                <Link to="/device">
                    <div className="device-card">
                        <h3>Laite 20</h3>
                        <p>2 / 9 tasks done</p>
                    </div>
                </Link>

                <Link to="/device">
                    <div className="device-card">
                        <h3>Laite 4</h3>
                        <p>9 / 9 tasks done</p>
                    </div>
                </Link>

                <Link to="/device">
                    <div className="device-card">
                        <h3>Laite 2</h3>
                        <p>9 / 9 tasks done</p>
                    </div>
                </Link>

                <Link to="/device">
                    <div className="device-card">
                        <h3>Laite 9</h3>
                        <p>4 / 9 tasks done</p>
                    </div>
                </Link>

                <Link to="/device">
                    <div className="device-card">
                        <h3>Laite 8</h3>
                        <p>6 / 9 tasks done</p>
                    </div>
                </Link>

                <Link to="/device">
                    <div className="device-card">
                        <h3>Laite 2</h3>
                        <p>7 / 9 tasks done</p>
                    </div>
                </Link>

                <Link to="/device">
                    <div className="device-card">
                        <h3>Generaattori 2</h3>
                        <p>6 / 9 tasks done</p>
                    </div>
                </Link>

                <Link to="/login">
                    <button>Login</button>
                </Link>
            </div>
        </div>
    );
}