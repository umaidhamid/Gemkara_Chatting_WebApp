import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config(); // must be at the top

const redisClient = new Redis({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT), // convert string to number
  password: process.env.REDIS_PASSWORD,
 
});

redisClient.on("connect", () => {
  console.log("✅ Connected to Redis Cloud");
});

redisClient.on("error", (err) => {
  console.error("❌ Redis Client Error:", err);
});

export default redisClient;
