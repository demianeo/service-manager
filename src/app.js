import env from "./config/env.config.js";
import ServiceManager from "./managers/ServiceManager.js";

const manager = new ServiceManager();

console.log("Servidor iniciado correctamente.");
console.log(`Puerto: ${env.PORT}`);
console.log(`Entorno: ${env.NODE_ENV}`);

// const newService = await manager.addService({
//     name: "Masaje relajante",
//     description: "Masaje corporal de 60 minutos",
//     duration: 60,
//     price: 800,
//     category: "Bienestar",
//     available: true
// });

// console.log(newService);

//const updated = await manager.updateService(1, {
//    price: 950,
//    available: false
//});

const deleted = await manager.deleteService(1);

console.log(deleted);

//console.log(updated);