import dotenv from "dotenv";
import dns from "dns";
import connectToDatabase from "./src/configs/db.js";
import app from "./src/app.js";

dotenv.config();

if (process.env.ENVIRONMENT === "dev") {
  dns.setServers(["8.8.8.8"]);
}

await connectToDatabase();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
