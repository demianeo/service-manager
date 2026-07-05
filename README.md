# Service Manager

## Descripción

Service Manager es un proyecto desarrollado con Node.js utilizando módulos ESM. Su objetivo es administrar los servicios de un sistema de turnos y reservas mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar).

La información de los servicios se almacena en el archivo `services.json`.

---

## Tecnologías utilizadas

- Node.js
- JavaScript (ESM)
- dotenv
- File System (fs/promises)

---

## Instalación

1. Clonar el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
```

2. Entrar a la carpeta del proyecto:

```bash
cd service-manager
```

3. Instalar las dependencias:

```bash
npm install
```

---

## Variables de entorno

Crear un archivo `.env` con las siguientes variables:

```env
PORT=8080
NODE_ENV=development
```

También existe un archivo `.env.example` con la estructura necesaria.

---

## Ejecutar el proyecto

Modo normal:

```bash
npm start
```

Modo desarrollo:

```bash
npm run dev
```

---

## Estructura del proyecto

```
src/
│
├── config/
│   └── env.config.js
│
├── data/
│   └── services.json
│
├── managers/
│   └── ServiceManager.js
│
└── app.js
```

---

## Recurso Services

Cada servicio tiene la siguiente estructura:

```javascript
{
    id,
    name,
    description,
    duration,
    price,
    category,
    available
}
```

### Descripción de cada propiedad

| Propiedad | Descripción |
|-----------|-------------|
| id | Identificador único del servicio |
| name | Nombre del servicio |
| description | Descripción del servicio |
| duration | Duración en minutos |
| price | Precio del servicio |
| category | Categoría del servicio |
| available | Indica si el servicio está disponible |

---

# Métodos disponibles

## getServices()

Obtiene todos los servicios.

Ejemplo:

```javascript
await manager.getServices();
```

---

## getServiceById(id)

Obtiene un servicio por su identificador.

Ejemplo:

```javascript
await manager.getServiceById(1);
```

---

## addService(serviceData)

Agrega un nuevo servicio.

Ejemplo:

```javascript
await manager.addService({
    name: "Consulta Médica",
    description: "Consulta general",
    duration: 60,
    price: 700,
    category: "Salud",
    available: true
});
```

---

## updateService(id, updatedData)

Actualiza un servicio existente.

Ejemplo:

```javascript
await manager.updateService(1,{
    price:900,
    available:false
});
```

---

## deleteService(id)

Elimina un servicio.

Ejemplo:

```javascript
await manager.deleteService(1);
```

---

## Autor

Proyecto desarrollado por Dariel.