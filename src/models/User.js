import mongoose from "mongoose";

// model 형태 정의
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  location: String,
});

// model 생성
const User = mongoose.model("User", userSchema);
export default User;
