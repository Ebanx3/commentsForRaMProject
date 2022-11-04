import { Router } from "express";
import {
  getCommentsByChar,
  postComment,
} from "../controller/characterController";
import Handler from "express-async-handler";

const characterRouter = Router();

characterRouter.get(
  "/:id/comments",
  Handler(async (req, res) => {
    const id = parseInt(req.params.id);
    const comments = await getCommentsByChar(id);
    res.status(200).json({
      msg: "ok",
      data: comments,
    });
  })
);

characterRouter.post(
  "/:id/comments",
  Handler(async (req, res) => {
    const id = parseInt(req.params.id);
    console.log(req.body);
    const newComment = await postComment(req.body);
    res.status(200).json({
      msg: "comment added",
      data: newComment,
    });
  })
);

export default characterRouter;
