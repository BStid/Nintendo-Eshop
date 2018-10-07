const axios = require("axios");

let fillMeArray = [];
let fillComments = [
  "I want all of these Amiibo!",
  "Are you going to buy the new Amiibo series?"
];
let cartItems = [];
let pullCart = [];

pullCartList = (req, res) => {
  // console.log("pullCartList", cartItems);
  res.status(200).send(cartItems);
};
toUpdate = (req, res) => {
  console.log(req.params.id, req.body);
  fillComments.splice(req.params.id, 1, req.body.comment);
  res.status(200).send(fillComments);
};
toFill = (req, res) => {
  axios
    .get("http://www.amiiboapi.com/api/amiibo/")
    .then(response => {
      fillMeArray = response.data.amiibo;
      res.status(200).send(fillMeArray);
    })
    .catch(error => {
      alert(error);
      res.status(500);
    });
};

allComments = (req, res) => {
  res.status(200).send(fillComments);
};

toAdd = (req, res) => {
  fillComments.push(req.body.comment);
  res.status(200).send(fillComments);
};
addToCart = (req, res) => {
  cartItems.push(req.body.cartItems.image);
  res.status(200).send(cartItems);
};

toDelete = (req, res) => {
  console.log(req.params.deletecomment);
  let deleted = fillComments.splice(req.params.deletecomment, 1);
  console.log(deleted);
  res
    .status(200)
    .send(fillComments)
    .catch(error => {
      alert(error);
      res.status(500);
    });
};

module.exports = {
  toFill,
  toUpdate,
  toAdd,
  allComments,
  toUpdate,
  toDelete,
  addToCart,
  pullCartList
};
