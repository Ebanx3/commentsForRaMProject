import { CommentModel } from "../models/comment";

export const getCommentsByChar = async (idChar: number) => {
  try {
    const comments = await CommentModel.find({ charId: idChar });
    console.log(comments);
    return comments;
  } catch (err: any) {
    console.log(err);
  }
};

export const postComment = async (body: any) => {
  try {
    const newComment = await CommentModel.create(body);
    console.log(newComment);
    return newComment;
  } catch (err: any) {
    console.log(err);
  }
};
