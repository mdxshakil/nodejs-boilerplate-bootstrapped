import cors from "cors";
import express, { Request, Response } from "express";
import invalidRouteHandler from "./app/middlewares/invalidRouteHandler";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import router from "./app/routes";
const app = express();
const moduleRoutes = router;
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Application routes
app.use("/api/v1", moduleRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

//Invalid route handler
app.use(invalidRouteHandler);

// global error handler
app.use(globalErrorHandler);

export default app;
