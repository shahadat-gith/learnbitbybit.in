import mongoose from "mongoose"

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Database Connected")
  } catch (error) {
    console.error("Error connecting to database:", error.message)
    process.exit(1)
  }
}

export default connectToDatabase