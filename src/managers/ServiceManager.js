import fs from "fs/promises";

class ServiceManager {

    constructor() {
        this.path = "./src/data/services.json";
    }

    async getServices() {
        const data = await fs.readFile(this.path, "utf-8");
        return JSON.parse(data);
    }

    async getServiceById(id) {
        const services = await this.getServices();

        const service = services.find(service => service.id === id);

        return service || null;
    }

    async addService(serviceData) {

        const services = await this.getServices();

        const {
            name,
            description,
            duration,
            price,
            category,
            available
        } = serviceData;

        if (
            !name ||
            !description ||
            duration === undefined ||
            price === undefined ||
            !category ||
            available === undefined
        ) {
            throw new Error("Faltan datos obligatorios.");
        }

        const id =
            services.length === 0
                ? 1
                : services[services.length - 1].id + 1;

        const newService = {
            id,
            name,
            description,
            duration,
            price,
            category,
            available
        };

        services.push(newService);

        await fs.writeFile(
            this.path,
            JSON.stringify(services, null, 2)
        );

        return newService;
    }

    async updateService(id, updatedData) {


        const services = await this.getServices();

        const index = services.findIndex(
            service => service.id === id
        );

        if (index === -1) {
            return null;
        }

        delete updatedData.id;

        services[index] = {
            ...services[index],
            ...updatedData
        };

        await fs.writeFile(
            this.path,
            JSON.stringify(services, null, 2)
        );

        return services[index];
    }

    async deleteService(id) {

    const services = await this.getServices();

    const index = services.findIndex(
        service => service.id === id
    );

    if (index === -1) {
        return null;
    }

    const deletedService = services[index];

    services.splice(index, 1);

    await fs.writeFile(
        this.path,
        JSON.stringify(services, null, 2)
    );

    return deletedService;

}
}

export default ServiceManager;