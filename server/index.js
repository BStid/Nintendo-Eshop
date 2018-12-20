const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const rc = require("./controller/rest_controller");
const port = process.env.PORT || 3005;
let app = express();

app.use(json());
app.use(cors());

app.get("/api/bible", rc.getVerse);
app.get("/api/pokelist", rc.fillPokeList);
app.get("/api/cartItems", rc.pullCartList);
app.get("/api/characterlist", rc.toFill);
app.get("/api/allcomments", rc.allComments);
app.post("/api/comments", rc.toAdd);
app.post("/api/cartItems", rc.addToCart);
app.put("/api/editcomments/:id", rc.toUpdate);
app.delete("/api/delete/:deletecomment", rc.toDelete);
app.delete("/api/deleteCart/:deletecartitem", rc.deleteCartItem);

app.use(express.static(__dirname + "/../build"));

app.listen(port, () => {
  console.log(`Server is now running on port ${port}`);
});
