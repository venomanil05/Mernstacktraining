import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true,
            unique: [true, "Email must be unique"]
        },

        password: {
            type: String,
            required: true,
            minlength: 6
        },

        isAdmin: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    {
        timestamps: true
    }
);

// Hash password before saving
userSchema.pre("save", async function () {
    if (!this.isModified("password")) {
        return;
    }

    const salt = await bcrypt.genSalt(10);

    this.password = await bcrypt.hash(this.password, salt);
});

// Compare password
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Prevent model overwrite error
const User =
    mongoose.models.User || mongoose.model("User", userSchema);

export default User;