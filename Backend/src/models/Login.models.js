import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

loginSchema.methods.comparePassword = async function (password) {
  return this.password === password;
};

const Login = mongoose.model("Login", loginSchema);

export default Login;
