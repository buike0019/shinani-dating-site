// models/User.ts
import mongoose, { Schema, models, model } from "mongoose";

const UserSchema = new Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String }, // only for credentials
});

const User = models.User || model("User", UserSchema);
export default User;
