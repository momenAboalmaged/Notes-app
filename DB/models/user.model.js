import mongoose from "mongoose";

// ## User has (name ,email,password "hash password" ,age ,phone,confirmed, Profile_picture)

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: Number,
    phone: Number,

    isConfirmed: {
      type: Boolean,
      default: false,
    },
    profilePic: String,
    OTPCode:String
  },
  {
    timestamps: true,
  }
);

export const userModel = mongoose.model("user", userSchema);
