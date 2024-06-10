import NavLink from "./NavLink";

const NavBar = () => {

   return (
   <ul className='navbar-nav mx-auto'>
        <NavLink name="Background" to="/background" ></NavLink>
        <NavLink name="Projects" to="/projects" ></NavLink>
        <NavLink name="Contact" to="/contact" ></NavLink>
        </ul>
   )
}

export default NavBar;