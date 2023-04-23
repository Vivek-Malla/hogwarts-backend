import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    postType : String,
    title: String,
    description: String,
    picturePath: String,
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
