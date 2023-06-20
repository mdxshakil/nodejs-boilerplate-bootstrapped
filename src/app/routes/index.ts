import express from "express";
import { DemoRoutes } from "../modules/Demo/demo.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/demo",
    route: DemoRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
