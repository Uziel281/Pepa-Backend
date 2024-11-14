import express, { Router } from "express";
import { AppRoutes } from "./routes";
export class Server {
  private app = express();

  constructor() {}

  async run() {
    this.app.use(express.json());
    this.app.use("/api", AppRoutes.routes);
    this.app.listen(3000, () => {
      console.log("Server is running on port: " + 3000);
    });
  }
}
