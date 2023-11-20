require("dotenv").config();
const fs = require("fs");

// Lee las variables de entorno o establece valores predeterminados
const apiBaseUrl = process.env.API_BASE_URL || "https://api.default.com";

// Carga y actualiza el archivo de entorno de producción
const envFilePath = "./src/environments/environment.prod.ts";
const envFileContent = `
export const environment = {
  production: true,
  apiBaseUrl: '${apiBaseUrl}'
};
`;

// Escribe las nuevas configuraciones en el archivo
fs.writeFileSync(envFilePath, envFileContent, "utf8");
console.log(`Archivo de entorno actualizado con API_BASE_URL=${apiBaseUrl}`);
