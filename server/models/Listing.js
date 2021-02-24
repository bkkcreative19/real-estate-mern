import mongoose from "mongoose";
const Schema = mongoose.Schema;
let listingSchema = new Schema(
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
  },
  {
    timestamps: true,
  }
);

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
