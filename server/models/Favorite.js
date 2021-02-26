import mongoose from "mongoose";
const Schema = mongoose.Schema;
let favoriteSchema = new Schema(
  {
    images: [String],
    price: {
      type: String,
      required: true,
    },
    beds: {
      type: String,
      required: true,
    },
    baths: {
      type: String,
      required: true,
    },
    sqft: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zip: {
      type: String,
      required: true,
    },
    _userId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const Favorite = mongoose.model("Favorite", favoriteSchema);

export default Favorite;
