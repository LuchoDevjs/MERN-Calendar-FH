import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN);
    console.log("db online");
  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora inicializar DB");
  }
};

export { dbConnection };
