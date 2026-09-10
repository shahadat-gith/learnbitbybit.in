import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
      index: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },

    username: {
      type: String,
      unique: true,
      sparse: true,
      lowercase: true,
      trim: true,
    },

    profile: {
      bio: {
        type: String,
        trim: true,
        maxlength: 500,
      },

      avatar: {
        url: {
          type: String,
          trim: true,
        },
        publicId: {
          type: String,
          trim: true,
        },
      },

      designation: {
        type: String,
        trim: true,
      },

      company: {
        type: String,
        trim: true,
      },

      experience: {
        type: Number,
        min: 0,
      },

      location: {
        type: String,
        trim: true,
      },

      website: {
        type: String,
        trim: true,
      },

      linkedin: {
        type: String,
        trim: true,
      },

      github: {
        type: String,
        trim: true,
      },
    },

    expertise: [
      {
        type: String,
        trim: true,
      },
    ],

    verification: {
      status: {
        type: String,
        enum: ["unverified", "pending", "verified", "rejected"],
        default: "unverified",
      },

      verifiedAt: Date,

      verifiedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },

      rejectionReason: {
        type: String,
        trim: true,
      },
    },

    status: {
      type: String,
      enum: ["active", "suspended"],
      default: "active",
    },
  },
  {
    timestamps: true,
  },
);

const Author = mongoose.models.Author || mongoose.model("Author", authorSchema);

export default Author;
