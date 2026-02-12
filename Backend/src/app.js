import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Anand lab running",
  });
});

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

import contacRouter from "./routes/Contact.routes.js";
import bookTestRouter from "./routes/BookTest.routes.js";
import addTestRouter from "./routes/AddTest.routes.js";

app.use("/api/v1/contact", contacRouter);
app.use("/api/v1/booking", bookTestRouter);
app.use("/api/v1/add-test", addTestRouter);
export default app;
