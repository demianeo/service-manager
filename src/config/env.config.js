import dotenv from "dotenv";

dotenv.config();

const requiredVariables = ["PORT", "NODE_ENV"];

for (const variable of requiredVariables) {
  if (!process.env[variable]) {
    throw new Error(`Falta la variable de entorno: ${variable}`);
  }
}

export default process.env;
