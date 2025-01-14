import mongoose from 'mongoose';
import dotenv from 'dotenv';

const initMongoConnection = async () => {
  dotenv.config();
  const MONGODB_USER = process.env.MONGODB_USER;
  const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
  const MONGODB_URL = process.env.MONGODB_URL;
  const MONGODB_DB = process.env.MONGODB_DB;
  try {
    await mongoose.connect(
      `mongodb+srv://akovalcuk485:jHj0Wad9eYCruTsY@cluster0.xl23b.mongodb.net/contacts?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log('Mongo connection successfully connected!');
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default initMongoConnection;
