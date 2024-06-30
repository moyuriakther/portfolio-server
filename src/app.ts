import express, { Application, Request, Response } from "express";
import cors from "cors";
import notFound from "./app/middlewares/notFound";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import router from "./app/routes";
// import cookieParser from "cookie-parser";

const app: Application = express();

// app.use(cors());

// app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: [      
      "http://localhost:3000",
      "http://localhost:5173"
    ],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to My Portfolio!");
});

app.use("/api", router);

app.use(globalErrorHandler);

app.use(notFound);

export default app;
