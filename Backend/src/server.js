import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/index.js";
import app from "./app.js";

connectDB()
  .then(() => {
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.log("Server Running on PORT", PORT);
    });
  })
  .catch((error) => {
    console.log("Error accur while connecting mongoDB", error);
  });
