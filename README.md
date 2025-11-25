# SGSI Steren – Dashboard de Gestión de Seguridad 🛡️

Este proyecto es un **Dashboard de Gestión de Seguridad de la Información (SGSI)** desarrollado con React. Simula un sistema de monitoreo de riesgos, cumplimiento normativo (ISO 27001) y seguimiento de controles de seguridad para la organización Steren.

> **Desarrollado por:** XoloDevs

![Estado del Proyecto](https://img.shields.io/badge/Estado-Finalizado-success)
![Versión](https://img.shields.io/badge/Versión-1.2.6-blue)

## ✨ Características Principales

* **🔐 Autenticación Simulada:** Pantalla de login con validación de credenciales.
* **📊 Matriz de Riesgos:** Visualización de riesgos inherentes vs. residuales.
* **📈 KPIs en Tiempo Real:** Indicadores de intentos de acceso, phishing y auditorías.
* **📝 Gestión de Políticas:** Estado de implementación de políticas corporativas (ISO 27001 y LFPDPPP).
* **📂 Repositorio Documental:** Sección dividida entre plantillas del sistema y evidencia registrada.
* **🎨 Diseño Corporativo:** Interfaz minimalista y moderna utilizando la paleta de colores oficial de Steren.

## 🚀 Tecnologías Utilizadas

* **[React](https://reactjs.org/):** Librería principal para la interfaz de usuario.
* **[Tailwind CSS](https://tailwindcss.com/):** Framework de estilos para un diseño rápido y responsivo.
* **[Lucide React](https://lucide.dev/):** Iconografía moderna y ligera.

## 🛠️ Requisitos Previos

Para ejecutar este proyecto necesitas tener instalado:
* [Node.js](https://nodejs.org/) (versión 14 o superior).
* npm (viene instalado con Node.js).

## 💻 Instalación y Ejecución

Sigue estos pasos para correr el proyecto localmente:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/TU_USUARIO/NOMBRE_DEL_REPO.git](https://github.com/TU_USUARIO/NOMBRE_DEL_REPO.git)
    cd NOMBRE_DEL_REPO
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    npm install --save-dev vite
    ```

3.  **Iniciar el servidor de desarrollo:**
    Si usas Vite:
    ```bash
    npm run dev
    ```
    O si usas Create React App:
    ```bash
    npm start
    ```

4.  **Abrir en el navegador:**
    Generalmente el proyecto correrá en `http://localhost:5173` o `http://localhost:3000`.

## 🔑 Credenciales de Acceso (Demo)

El sistema cuenta con una autenticación simulada. Para ingresar al dashboard utiliza:

| Campo | Valor |
| :--- | :--- |
| **Usuario** | `admin` |
| **Contraseña** | `steren` |

## 📂 Estructura del Proyecto

```text
src/
├── Dashboard.jsx    # Componente principal con toda la lógica y vistas
├── App.jsx          # Punto de entrada que renderiza el Dashboard
├── index.css        # Importaciones de Tailwind CSS
└── main.jsx         # Montaje de la aplicación React