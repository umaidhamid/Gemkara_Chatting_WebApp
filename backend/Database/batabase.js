import mongoose from "mongoose";

function connect() {
  mongoose
    .connect(process.env.MONGO_DB_URL)
    .then(() => {
      console.log("✅ Database Connected");
    })
    .catch((err) => {
      console.error("❌ Error in Connecting DB:", err.message);
    });
}

export default connect;
