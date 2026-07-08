import { Router } from "express";
import ServiceManager from "../managers/ServiceManager.js";

const router = Router();
const manager = new ServiceManager();

router.get("/", async (req, res) => {
    let services = await manager.getServices();

    const { category, available } = req.query;

    if (category) {
        services = services.filter(
            (service) => service.category.toLowerCase() === category.toLowerCase()
        );
    }

    if (available !== undefined) {
        const isAvailable = available === "true";

        services = services.filter(
            (service) => service.available === isAvailable
        );
    }

    res.status(200).json(services);
});

// GET /api/services/:sid
router.get("/:sid", async (req, res) => {
    const id = parseInt(req.params.sid);

    const service = await manager.getServiceById(id);

    if (!service) {
        return res.status(404).json({
            error: "Servicio no encontrado"
        });
    }

    res.status(200).json(service);
});

// POST /api/services
router.post("/", async (req, res) => {
    const {
        name,
        description,
        duration,
        price,
        category,
        available
    } = req.body;

    if (
        !name ||
        !description ||
        duration === undefined ||
        price === undefined ||
        !category ||
        available === undefined
    ) {
        return res.status(400).json({
            error: "Faltan campos obligatorios"
        });
    }

    const newService = await manager.addService({
        name,
        description,
        duration,
        price,
        category,
        available
    });

    res.status(201).json(newService);
});

// PUT /api/services/:sid
router.put("/:sid", async (req, res) => {
    const id = parseInt(req.params.sid);

    const updatedService = await manager.updateService(id, req.body);

    if (!updatedService) {
        return res.status(404).json({
            error: "Servicio no encontrado"
        });
    }

    res.status(200).json(updatedService);
});

// DELETE /api/services/:sid
router.delete("/:sid", async (req, res) => {
    const id = parseInt(req.params.sid);

    const deletedService = await manager.deleteService(id);

    if (!deletedService) {
        return res.status(404).json({
            error: "Servicio no encontrado"
        });
    }

    res.status(200).json(deletedService);
});

export default router;