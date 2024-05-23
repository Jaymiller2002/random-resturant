import { Link } from "react-router-dom";

// Links to other pages
function Header() {
  return (
    <div style={{marginTop: '15px'}}>
      <button style={{marginRight: '10px'}}><Link to="./">Menu</Link></button>
      <button style={{marginRight: '10px'}}><Link to="./about">Contact Us</Link></button>
      <button style={{marginRight: '10px'}}><Link to="./signin">Sign-in</Link></button>
      <button style={{marginRight: '10px'}}><Link to="./online">Order Online</Link></button>
      <button style={{marginRight: '10px'}}><Link to="./reservation">Reservation</Link></button>
    </div>
  )
}

export default Header