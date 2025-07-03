import "./App.css";
import { Link } from "react-router";

export default function App() {
  return (
    <>
      <nav className="nav-bar">
        <ul className="links">
          <li className="list-item">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="list-item">
            <Link to={"shop"}>Shop</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
