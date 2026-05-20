import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true, 
    },
  },
  { timestamps: true }
);

const Collection = mongoose.model("Collection", collectionSchema);

export default Collection;