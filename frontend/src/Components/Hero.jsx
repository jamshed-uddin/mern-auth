import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero ">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">MERN AUTH</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to={"/signin"} className="btn btn-sm  btn-primary mr-3">
            Sign in
          </Link>
          <Link to={"/signup"} className="btn btn-sm ">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
