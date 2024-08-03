import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div>
      <nav className="flex flex-row justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/" className="flex items-center">
          <div className="ml-5 h-auto">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="h-8 w-8 object-contain"
            />
          </div>
        </NavLink>
        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink
            to="/"
            className="hover:text-red-300 transition duration-300 ease-in-out"
          >
          <p>Home</p>
        </NavLink>
        <NavLink
          to="/cart"
          className="relative hover:text-red-300 transition duration-300 ease-in-out"
        >
            {cart.length > 0 && (
              <span className="bg-red-500 text-white rounded-full px-2 absolute top-0 right-0">
                {cart.length}
              </span>
            )}
            <IoCartOutline size={24} />
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;