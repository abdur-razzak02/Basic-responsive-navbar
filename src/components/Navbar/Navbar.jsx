import { useState } from "react";
import NavLinks from "../NavLinks/NavLinks";
import { RiMenu2Fill } from "react-icons/ri";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    {
      id: 1,
      path: "/",
      component: "Home",
    },
    {
      id: 2,
      path: "/about",
      component: "About",
    },
    {
      id: 3,
      path: "/services",
      component: "Services",
    },
    {
      id: 4,
      path: "/contact",
      component: "Contact",
    },
    {
      id: 5,
      path: "/profile",
      component: "Profile",
    },
  ];

  return (
    <nav className="w-11/12 mx-auto flex  justify-between items-center mt-2 lg:mt-0">
      {/* <h1>Header</h1> */}
      <div onClick={() => setOpen(!open)} className="text-2xl lg:hidden">
        {open === true ? <FaXmark></FaXmark> : <RiMenu2Fill />}
      </div>
      <ul
        className={`${open ? "left-5 top-12" : "-left-60 top-12"} lg:flex lg:static absolute text-xl bg-gray-700 lg:bg-transparent p-2 rounded-lg duration-1000`}
      >
        {routes.map((nav) => (
          <NavLinks key={nav.id} nav={nav}></NavLinks>
        ))}
      </ul>
      <button className="bg-gray-700 px-3 py-2 rounded-md font-semibold">
        Submit
      </button>
    </nav>
  );
};

export default Navbar;
