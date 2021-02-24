import Listing from "../models/Listing.js";

const getListings = async (req, res) => {
  const listings = await Listing.find({});

  res.send(listings);
};

const getSpecificListings = async (req, res) => {
  const listings = await Listing.find({ type: req.params.type });

  res.send(listings);
};

const addListings = async (req, res) => {
  const {
    images,
    price,
    beds,
    baths,
    sqft,
    type,
    address,
    city,
    state,
    zip,
  } = req.body;

  const listing = new Listing({
    images,
    price,
    beds,
    baths,
    sqft,
    type,
    address,
    city,
    state,
    zip,
  });

  const response = await listing.save();
  res.send(response);
};

export { getListings, addListings, getSpecificListings };
