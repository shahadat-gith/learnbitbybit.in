import mongoose from "mongoose";

const blockSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },

    order: {
      type: Number,
      required: true,
    },
  },
  {
    discriminatorKey: "type",
    _id: true,
  },
);

const paragraphSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    _id: false,
  },
);

const headingSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },

    level: {
      type: Number,
      required: true,
      min: 2,
      max: 6,
    },
  },
  {
    _id: false,
  },
);

const codeSchema = new mongoose.Schema(
  {
    language: {
      type: String,
      required: true,
      trim: true,
    },

    code: {
      type: String,
      required: true,
    },
  },
  {
    _id: false,
  },
);

const imageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },

    alt: {
      type: String,
      trim: true,
    },

    caption: {
      type: String,
      trim: true,
    },
  },
  {
    _id: false,
  },
);

const videoSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      trim: true,
    },
  },
  {
    _id: false,
  },
);

const calloutSchema = new mongoose.Schema(
  {
    variant: {
      type: String,
      enum: ["info", "tip", "warning", "important"],
      required: true,
    },

    title: {
      type: String,
      trim: true,
    },

    text: {
      type: String,
      required: true,
    },
  },
  {
    _id: false,
  },
);

const listSchema = new mongoose.Schema(
  {
    ordered: {
      type: Boolean,
      default: false,
    },

    items: [
      {
        type: String,
        required: true,
        trim: true,
      },
    ],
  },
  {
    _id: false,
  },
);

const quoteSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      trim: true,
    },
  },
  {
    _id: false,
  },
);

const tableSchema = new mongoose.Schema(
  {
    headers: [
      {
        type: String,
        required: true,
      },
    ],

    rows: [
      {
        type: [String],
        required: true,
      },
    ],
  },
  {
    _id: false,
  },
);

export {
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
};
