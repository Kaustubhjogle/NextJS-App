import Link from "next/link";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="main-container">
      <div className="logo-container">
        <Link href="/">Logo</Link>
      </div>
      <div>
        <ul className="navlink-list">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/about/team">Team</Link>
          </li>
          <li>
            <Link href="/about/company">Company</Link>
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
          <li>
            <Link href="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
