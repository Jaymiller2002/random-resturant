import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <button><Link to="./">Menu</Link></button>
      <button><Link to="./about">Contact Us</Link></button>
      <button><Link to="./signin">Sign-in</Link></button>
      <button><Link to="./online">Order Online</Link></button>
      <button><Link to="./reservation">Reservation</Link></button>
    </div>
  )
}

export default Header