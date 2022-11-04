import { Schema, model } from "mongoose";

const CommentCollectionName = "comment";

const CommentSchema = new Schema(
  {
    charId: { type: Number, required: true },
    charName: { type: String, required: true },
    author: { type: String, required: true },
    comment: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

export const CommentModel = model(CommentCollectionName, CommentSchema);
