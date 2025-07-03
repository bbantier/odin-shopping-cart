import { Link } from "react-router";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Shop</Link>
        </li>
        <li>
          <Link to={"cart"}>Cart</Link>
        </li>
      </ul>
    </nav>
  )
}