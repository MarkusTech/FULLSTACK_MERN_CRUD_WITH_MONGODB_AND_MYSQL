import User from "../models/User.js";
import UserModel from "../models/User.js";

/** HTTP POST for saving user */
const createUser = async (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
};

/** HTTP GET for viewing all the data in database */
const getUsers = async (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
};

/** HTTP GET for viewing single the data in database */
const getUser = async (req, res) => {
  UserModel.findById(req.params.id)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
};

/** HTTP PUT for updating single the data in database */
const updateUser = async (req, res) => {
  UserModel.findByIdAndUpdate(
    { _id: req.params.id },
    {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    }
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
};

/** HTTP DELETE for deleting single the data in database */
const deleteUser = async (req, res) => {
  UserModel.findByIdAndRemove(req.params.id)
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
};

export { createUser, getUsers, getUser, updateUser, deleteUser };
