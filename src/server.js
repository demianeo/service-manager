import app from "./app.js";
import env from "./config/env.config.js";

app.listen(env.PORT, () => {
    console.log("Servidor iniciado correctamente.");
    console.log(`Puerto: ${env.PORT}`);
    console.log(`Entorno: ${env.NODE_ENV}`);
});