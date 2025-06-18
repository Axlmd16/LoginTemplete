![image](https://github.com/user-attachments/assets/78164386-f2cd-426f-a74e-d1725849f2c0)# SportBoard - Login UI

Este proyecto es una interfaz de usuario moderna para la autenticación de usuarios en una plataforma llamada **SportBoard**. Incluye formularios para iniciar sesión, recuperar contraseña y crear una nueva cuenta, todo con animaciones suaves y un diseño atractivo.

## Funcionalidades principales

- **Inicio de sesión:**
  - Formulario para ingresar correo electrónico y contraseña.
  - Botón para iniciar sesión.
  - Acceso rápido a inicio de sesión con Google, GitHub y Facebook (solo visual, no funcionalidad OAuth real).

- **Recuperar contraseña:**
  - Enlace "¿Olvidaste tu contraseña?" que muestra un formulario para ingresar el correo y solicitar el restablecimiento.
  - Animación de transición entre formularios.
  - Botón para volver al formulario de inicio de sesión.

- **Registro de usuario:**
  - Enlace "Regístrate" que muestra un formulario para crear una nueva cuenta.
  - Campos para correo electrónico, contraseña y repetir contraseña.
  - Botón para volver al formulario de inicio de sesión.
  - Animación de transición entre formularios.

- **Animaciones y diseño:**
  - Transiciones suaves entre formularios (login, recuperación y registro).
  - Diseño responsivo y moderno, con colores oscuros y detalles en azul vibrante.
  - Iconos SVG en los campos de entrada y botones sociales.
 
- **Capturas de pantalla**
![image](https://github.com/user-attachments/assets/4bba48ea-4b1d-47ca-a8bc-f56d3b559469)
![image](https://github.com/user-attachments/assets/083b837a-f55b-4812-8bb7-f3662644d641)
![image](https://github.com/user-attachments/assets/52b62470-76b4-4694-b098-d2212de66a60)




## Archivos principales

- `index.html`: Estructura HTML de la interfaz, contiene los tres formularios y enlaces de navegación.
- `styles.css`: Estilos visuales, animaciones y responsividad.
- `script.js`: Lógica para mostrar/ocultar formularios y gestionar las animaciones de transición.

## ¿Cómo funciona?

1. Al abrir la página, se muestra el formulario de inicio de sesión.
2. Al hacer clic en "¿Olvidaste tu contraseña?", aparece el formulario de recuperación con animación.
3. Al hacer clic en "Regístrate", aparece el formulario de registro con animación.
4. En cualquier formulario, puedes volver al login usando los enlaces de "Volver a Iniciar Sesión".

## Notas

- Los botones sociales son solo visuales, no implementan OAuth real.
- No hay backend ni almacenamiento de datos, es solo la interfaz visual.
- Puedes personalizar los campos, mensajes y estilos fácilmente editando los archivos fuente.

---

