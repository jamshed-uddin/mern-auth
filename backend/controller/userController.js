import asyncHandler from "express-async-handler";

//desc  auth user
//route /api/users/auth
//access public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth user" });
});

export { authUser };
