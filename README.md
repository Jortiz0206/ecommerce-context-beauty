# 🌸 Joha Beauty Spa — E-commerce con Estado Global (React & Context API)

¡Bienvenido al repositorio de **Glow & Grace**! Este proyecto es una aplicación web de comercio electrónico enfocada en productos de belleza y cuidado personal. Fue desarrollado en **React** implementando un sistema de **Estado Global** utilizando exclusivamente la herramienta nativa **Context API**, permitiendo una comunicación limpia, eficiente y desacoplada entre componentes.

---

## 🚀 Características Principales

1. **Doble Contexto Global (Separación de Responsabilidades):**
   * 👤 **UserContext:** Gestiona el estado de autenticación de la sesión del usuario (Inicio/Cierre de sesión dinámico).
   * 🛒 **CartContext:** Controla de manera reactiva el flujo del carrito de compras (agregar productos, sumar cantidades de forma automática, eliminar artículos individuales y vaciar el carrito).
2. **Arquitectura basada en Componentes Reutilizables:** Diseñado bajo estándares de orden arquitectónico modular.
3. **Interfaz e Identidad de Marca Estética:** Diseño visual minimalista, limpio ("soft & clean") con colores suaves adaptados al ámbito de la estética. Además, integra la identidad corporativa mediante un logotipo personalizado en la barra de navegación.

---

## 📁 Estructura del Proyecto

El código fuente dentro de la carpeta `src/` está organizado de la siguiente manera para garantizar escalabilidad:

```text
src/
├── assets/
│   └── logo.jpg            # Recurso gráfico de la identidad de la tienda
├── context/
│   ├── UserContext.jsx     # Proveedor y estado global del Usuario
│   └── CartContext.jsx     # Proveedor y lógica de negocio del Carrito
├── components/
│   ├── Navbar.jsx          # Barra de navegación con datos en tiempo real y Logotipo
│   ├── ProductList.jsx     # Contenedor y mapeo de la colección de productos
│   ├── ProductCard.jsx     # Tarjeta atómica para visualización y acción de compra
│   └── Cart.jsx            # Panel de control de compras y cálculo de totales
├── pages/
│   └── Home.jsx            # Vista principal que unifica la experiencia de usuario
├── App.jsx                 # Componente raíz con la envoltura de los Providers
└── main.jsx                # Punto de entrada oficial de la aplicación a la DOM