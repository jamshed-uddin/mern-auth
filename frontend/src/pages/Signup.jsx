import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="  w-[97%] lg:w-[35%] mx-auto flex items-center">
      <div className="  w-full  p-3 lg:rounded-xl lg:shadow-lg">
        <form className="">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
              required
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
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <div className="p-3">
          Already have an account?{" "}
          <Link to={"/signin"}>
            <span className="text-blue-600 hover:underline">Sign in</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
