import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="flex justify-center items-center w-full h-14 bg-zinc-700 px-28 text-white">
        <ul className="flex justify-between items-center w-full">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
        </ul>
    </nav>
)
}

export default NavBar