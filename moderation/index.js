const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", async (req, res) => {
  const { type, data } = req.body;
  const { id, content, postId } = data;
  if (type === "CommentCreated") {
    const status = content.includes("orange") ? "rejected" : "approved";
    console.log(status);
    await axios
      .post("http://localhost:4005/events", {
        type: "CommentModerated",
        data: { id: id, content: content, postId: postId, status: status },
      })
      .catch((err) => console.log(err));
  }
  res.send({});
});

app.listen(4003, () => {
  console.log("Listening on 4003");
});
