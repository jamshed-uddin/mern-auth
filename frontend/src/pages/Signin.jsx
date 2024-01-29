import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../Slices/userApiSlice";
import { setCredentials } from "../Slices/authSlice";
import toast from "react-hot-toast";

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log({ email, password });

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
      toast.success("Successfully logged in");
    } catch (error) {
      toast.error(error?.data?.message || error?.error);
      console.log(error?.data?.message || error?.error);
    }
  };

  return (
    <div className="  w-[97%] lg:w-[35%] mx-auto flex items-center">
      <div className="  w-full  p-3 lg:rounded-xl lg:shadow-lg">
        <form onSubmit={onSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              name="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              name="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-control mt-6">
            <button
              disabled={isLoading}
              type="submit"
              className="btn btn-primary"
            >
              Login
            </button>
          </div>
        </form>
        <div className="p-3">
          New here?{" "}
          <Link to={"/signup"}>
            <span className="text-blue-600 hover:underline">Sign up</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
