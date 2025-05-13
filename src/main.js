import express from "express";
import "dotenv/config";
import configViewEngine from "./config/viewEngine.js";

const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME;

const app = express();

app.use(express.json());

// Lấy Routes
import authRoutes from "./routes/auth_route.js";

// config engine template
configViewEngine(app);

// Sử dụng Routes
app.use("/", authRoutes);

app.listen(port, hostname, () => {
  console.log(`Server running on http://${hostname}:${port}`);
});
