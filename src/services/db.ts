import { connect } from "mongoose";

export const ConnectToDB = async (url: string) => {
  try {
    await connect(url);
    return;
  } catch (err: any) {
    console.log(err);
  }
};
