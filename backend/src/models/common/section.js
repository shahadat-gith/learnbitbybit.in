import mongoose from "mongoose";
import {
  blockSchema,
  paragraphSchema,
  headingSchema,
  codeSchema,
  imageSchema,
  videoSchema,
  calloutSchema,
  listSchema,
  quoteSchema,
  tableSchema,
} from "./block.js";

const sectionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      trim: true,
    },

    level: {
      type: Number,
      required: true,
      min: 1,
    },

    order: {
      type: Number,
      required: true,
    },

    blocks: [blockSchema],
  },
  {
    _id: true,
  },
);

const block = sectionSchema.path("blocks");

block.discriminator("paragraph", paragraphSchema);
block.discriminator("heading", headingSchema);
block.discriminator("code", codeSchema);
block.discriminator("image", imageSchema);
block.discriminator("video", videoSchema);
block.discriminator("callout", calloutSchema);
block.discriminator("list", listSchema);
block.discriminator("quote", quoteSchema);
block.discriminator("table", tableSchema);

export { sectionSchema };
