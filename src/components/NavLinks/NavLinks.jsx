import PropTypes from "prop-types";

const NavLinks = ({ nav }) => {    
    const { path, component } = nav;
    
  return (
      <li className="hover:bg-slate-500 px-6 lg:px-8 py-2 rounded-md">
      <a href={path}>{component}</a>
    </li>
  );
};

NavLinks.propTypes = {
  nav: PropTypes.object,
};
export default NavLinks;
