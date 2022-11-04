import express from "express";
import characterRouter from "../routes";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(cors());

app.use("/character", characterRouter);

app.use((req, res) => {
  res.status(404).json({
    msg: "Error",
    data: "UndefinedPath",
  });
});

export const serverInit = () => {
  app.listen(PORT, () =>
    console.log("Server up! ... Listening at port ", PORT)
  );
};
