import "./App.css";
import { Link } from "react-router";

export default function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"shop"}>Shop</Link>
          </li>
          <li>
            <Link to={"cart"}>Cart</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
