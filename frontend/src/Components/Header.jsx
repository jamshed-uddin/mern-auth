import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../Slices/userApiSlice";
import { logout } from "../Slices/authSlice";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo);

  const dispath = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispath(logout());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

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
              <div
                title={userInfo && userInfo?.email}
                className="avatar placeholder"
              >
                <div className="bg-neutral text-neutral-content rounded-full w-10">
                  <span className="">
                    {userInfo ? userInfo?.name.charAt(0).toUpperCase() : ""}
                  </span>
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link to={"/profile"}>
                <li className="ml-3 font-semibold text-lg hover:scale-95">
                  {userInfo ? userInfo.name : "User name"}
                </li>
              </Link>
              <li>
                <a>Settings</a>
              </li>
              <li>
                {userInfo && <button onClick={logoutHandler}>Logout</button>}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
