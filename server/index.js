const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const rc = require("./controller/rest_controller");

let app = express();

app.use(json());
app.use(cors());

app.get("/api/characterlist", rc.toFill);
app.get("/api/allcomments", rc.allComments);
app.post("/api/comments", rc.toAdd);
app.put("/api/editcomments/:id", rc.toUpdate);
app.delete("/api/delete/:deletecomment", rc.toDelete);

const port = 3005;
app.listen(port, () => {
  console.log(`Server is now running on port ${port}`);
});
