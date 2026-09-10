import mongoose from "mongoose";
import { sectionSchema } from "../common/section.js";

const systemDesignSchema = new mongoose.Schema(
  {
    type:{
      type:String,
      enum:["core-concept", "example"]
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
      required: true,
      index: true,
    },

    tags: [
      {
        type: String,
        trim: true,
      },
    ],

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
      index: true,
    },

    publishedAt: Date,

    video: {
      type: String,
      default: "",
    },

    sections: [sectionSchema],
  },
  {
    timestamps: true,
  },
);

const SystemDesign =
  mongoose.models.SystemDesign || mongoose.model("SystemDesign", systemDesignSchema);

export default SystemDesign;
