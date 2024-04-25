import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <button><Link to="./">Menu</Link></button>
      <button><Link to="./about">Contact Us</Link></button>
      <button><Link to="./Signin">Sign-in</Link></button>
      <button><Link to="./Online">Order Online</Link></button>
      <button><Link to="./Reservation">Make a rservation</Link></button>
    </div>
  )
}

export default Header