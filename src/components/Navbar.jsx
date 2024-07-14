import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

    const {cart} = useSelector((state) => state);
  return (<div>
    <nav className="flex flex-row justify-between items-center h-20 max-w-6xl mx-auto">
      <NavLink to="/">
          <div className="ml-5 ">
              <img src="data:image/png;base64,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" alt="" />
          </div>
      </NavLink>
        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
            <NavLink to="/">
                <p className=" hover:text-red-300">Home</p>
            </NavLink>
            <NavLink to="/cart">
                <div className="relative">
                    {
                        cart.length>0 && <span className="bg-red-500 text-white rounded-full px-2">{cart.length}</span>
                    }
                    <IoCartOutline/>
                </div>
            </NavLink>
        </div>
    </nav>
  </div>);
};

export default Navbar;
 