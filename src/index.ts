import "reflect-metadata";
import express from "express";
import { routes } from "./routes/index";
import { AppDataSource } from "./data-source";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(routes);

AppDataSource.initialize()
  .then(() => {
    console.log("📦 Database connected successfully!");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Error during Data Source initialization:", error);
  });
