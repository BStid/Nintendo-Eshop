const axios = require("axios");

let fillMeArray = [];
let fillComments = ["Comment Here!"];

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
  // console.log(req.body);
  fillComments.push(req.body.comment);
  res.status(200).send(fillComments);
};

module.exports = { toFill, toUpdate, toAdd, allComments, toUpdate };
