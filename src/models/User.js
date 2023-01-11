import mongoose from "mongoose";
import bcrypt from "bcrypt";

// model 형태 정의
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  location: String,
});

userSchema.pre("save", async function () {
  console.log("this : ", this);
  console.log("Users Password : ", this.password);
  this.password = await bcrypt.hash(this.password, 5);
  console.log("Hashed Password : ", this.password);
});

// model 생성
const User = mongoose.model("User", userSchema);

export default User;
