import Favorite from "../models/Favorite.js";
// import { deleteTasksFromList } from "../controllers/task.js";

const createFavorite = async (req, res) => {
  // We want to create a new list and return the new list document back to the user (which includes the id)
  // The list information (fields) will be passed in via the JSON request body
  console.log(req.user);
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

  const favorite = new Favorite({
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
    _userId: req.user,
  });

  const response = await favorite.save();
  res.send(response);

  // let newList = new List({
  //   title,
  //   _userId: req.user_id,
  // });
  // newList.save().then((listDoc) => {
  //   // the full list document is returned (incl. id)

  //   res.send(listDoc);
  // });
};

const getFavorites = async (userId) => {
  const response = await Favorite.find({
    _userId: userId,
  });

  return response;
};

export { createFavorite, getFavorites };
