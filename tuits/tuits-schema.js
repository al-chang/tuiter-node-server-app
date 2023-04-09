import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    tuit: String,
    likes: Number,
    liked: Boolean,
    retuits: Number,
    replies: Number,
    username: String,
    handle: String,
    time: String,
    title: String,
    topic: String,
    image: String,
  },
  { collection: "tuits" }
);

export default schema;
