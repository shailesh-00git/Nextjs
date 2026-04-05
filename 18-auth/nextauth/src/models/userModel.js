const userSchema = new mongoose.schema({
  username: {
    type: String,
    required: [true, "please enter username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "please enter email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "please enter password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});
const User = mongoose.models.user || mongoose.model("user", userSchema);
export default User;
