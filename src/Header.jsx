import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <button><Link to="./about">Contact us</Link></button>
      <button><Link to="./">Menu</Link></button>
      <button><Link to="./about">Sign-in</Link></button>
      <button><Link to="./about">Order Online</Link></button>
      <button><Link to="./about">Make a rservation</Link></button>
    </div>
  )
}

export default Header