import express, { Router } from "express";
import cors from "cors";
import { AppRoutes } from "./routes";
export class Server {
  private app = express();

  constructor() {}

  async run() {
    this.app.use(
      cors({
        origin: "http://localhost:4200",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
      })
    );
    this.app.use(express.json());
    this.app.use("/api", AppRoutes.routes);
    this.app.listen(3000, () => {
      console.log("Server is running on port: " + 3000);
    });
  }
}
