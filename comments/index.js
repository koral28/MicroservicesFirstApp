const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const { randomBytes } = require("crypto");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());

const commentsByPostId = [];

app.use(cors());

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", async (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];
  comments.push({ commentId, content, status: "pending" });
  commentsByPostId[req.params.id] = comments;

  await axios
    .post("http://localhost:4005/events", {
      type: "CommentCreated",
      data: {
        id: commentId,
        content,
        postId: req.params.id,
        status: "pending",
      },
    })
    .catch((err) => console.log(err));

  res.send(comments);
});

app.post("/events", async (req, res) => {
  console.log("Received Event", req.body.type);
  const { type, data } = req.body;
  if (type === "CommentModerated") {
    const { id, content, postId, status } = data;
    //console.log(commentsByPostId[postId]);
    const comment = commentsByPostId[postId].find((x) => x.commentId === id);

    comment.status = status;

    await axios
      .post("http://localhost:4005/events", {
        type: "CommentUpdated",
        data: { id, status, postId, content },
      })
      .catch((err) => console.log(err));
  }

  res.send({});
});

app.listen(4001, () => {
  console.log("Listening on 4001");
});
