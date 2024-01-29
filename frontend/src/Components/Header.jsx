import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo);

  return (
    <div className="shadow-md ">
      <div className="navbar w-[97%] lg:w-3/4 mx-auto">
        <div className="flex-1">
          <Link to={"/"} className="tracking-tight text-xl font-bold">
            MERN AUTH
          </Link>
        </div>
        <div className="flex-none">
          <div>
            {!userInfo && (
              <Link to={"/signin"} className="btn btn-sm btn-primary">
                Sign in
              </Link>
            )}
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="ml-3 font-semibold">
                {userInfo ? userInfo.name : "User name"}
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
