import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const rawUri = process.env.MONGODB_URI || '';
    // If the provided URI already contains a database name (e.g. /mydb), use it as-is.
    // Otherwise append the default database name 'appointy'.
    const hasDbName = /\/[^\/?]+(\?|$)/.test(rawUri);
    const uri = hasDbName ? rawUri.replace(/\s+/g, '') : `${rawUri.replace(/\/$/, '')}/appointy`;

    // Mask credentials for logging (don't print passwords)
    const masked = uri.replace(/:\/\/(.*?):(.*?)@/, '://$1:***@');
    console.log(`Connecting to MongoDB using: ${masked}`);

    await mongoose.connect(uri);
    console.log("Database Connected");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
