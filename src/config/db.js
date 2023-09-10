import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const db = new Sequelize(process.env.DB_URL);

export const dbInit = async () => {
  try {
    console.log("Connecting Database...🟡");
    await db.authenticate();
    console.log("Database connected! ✅");
  } catch (error) {
    console.log(error);
  }
};
