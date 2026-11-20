# IG S9- Shader GLSL

Práctica de la semana 9 de la asignatura **Informática Gráfica**, del Grado en Ingeniería Informática de la Universidad de Las Palmas de Gran Canaria (ULPGC).

El proyecto consiste en desarrollar un efecto visual mediante shaders GLSL, utilizando animaciones matemáticas, operaciones sobre coordenadas y manipulación de colores.

## Descripción

El shader representa un túnel de apariencia infernal, formado por bandas concéntricas de tonos carmesí, rojos y oscuros para generar una sensación de profundidad y movimiento. 

En el centro de la composición aparece un pequeño esqueleto pixel art de 16 × 16 píxeles, que representa la caída a través de este espacio.

El efecto se genera directamente mediante un fragment shader, sin necesidad de geometría adicional. 

Se ha seguido el ejemplo de efecto tunel del guión de la práctica de la asignatura, y se ha refinado y ajustado los colores para representar como me siento los días de clase.

## Versiones

El proyecto incluye dos implementaciones diferentes del efecto:

### 1. Shader original - `Yo cuando clase.frag`

Es la versión completa del proyecto, en la que se desarrolla el efecto visual con mayor detalle.

<img width="512" height="256" alt="4922eecd-45fa-42de-b5da-c2701c2061f2" src="https://github.com/user-attachments/assets/0750aead-162b-4b0b-8c8a-5aafb5e6cdda" />

**Características principales:**
- Túnel animado mediante funciones sinusoidales.
- Distorsión de las bandas mediante coordenadas polares.
- Paleta de colores personalizada, combinando tonos oscuros, carmesí y rojos.
- Esqueleto pixel art de 16 × 16 píxeles, con su paleta de colores original.
- Rotación continua del esqueleto sobre su propio eje.
- Representación del esqueleto mediante matrices de bits, sin necesidad de cargar una textura externa.

Esta versión prioriza el resultado visual y la experimentación con las posibilidades de GLSL.

### 2. Shader reducido - `Reducido.frag`

Es una versión optimizada del shader, desarrollada para cumplir con la limitación de tamaño de **512 bytes** establecida para la práctica.

<img width="512" height="256" alt="61dd14a5-7050-4528-a9bb-dfb5db875a5c" src="https://github.com/user-attachments/assets/88d11bfc-9fa3-42a2-8839-be757f4e5bb7" />

**Características principales:**
- Túnel radial animado mediante una función sinusoidal.
- Paleta simplificada de tonos rojizos.
- Esqueleto de 16 × 16 píxeles codificado mediante operaciones binarias.
- Eliminación de la rotación y de los efectos adicionales para reducir el tamaño del código.
- Código comprimido en una única línea.

El resultado conserva los elementos visuales fundamentales de la composición, sacrificando algunos detalles y efectos de la versión original para ajustarse al límite establecido.

## Tecnologías utilizadas

- GLSL (OpenGL Shading Language).
- Fragment Shaders.
- Funciones matemáticas y trigonométricas.
- Coordenadas cartesianas y polares.
- Operaciones binarias y manipulación de bits.

## Recursos y guías utilizados
- Informática Gráfica (IG) Guion de prácticas · Curso 2026/2027: https://github.com/otsedom/otsedom.github.io/blob/main/IG/README.md
- The Book of Shaders: https://thebookofshaders.com
- Introduction to the OpenGL Shading Language (GLSL): https://web.engr.oregonstate.edu/~mjb/cs519/Handouts/Shaders.1pp.pdf

## Autor

**Sean Michael Owens Cruz**

Grado en Ingeniería Informática - ULPGC

Asignatura: Informática Gráfica
