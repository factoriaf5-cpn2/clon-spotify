# Style Guide — Clon de Spotify

## Layout

Los diseños de referencia están pensados para los siguientes anchos:

- Mobile: 375px
- Desktop: 1440px

El contenido debe ser responsive y funcionar correctamente en cualquier tamaño entre 320px y pantallas grandes.

## Colores

```css
:root {
  /* Marca */
  --color-brand: #1db954; /* Verde Spotify */
  --color-brand-hover: #1ed760; /* Verde hover */

  /* Fondos */
  --color-bg-dark: #191414; /* Negro Spotify */
  --color-bg-secondary: #282828; /* Gris oscuro tarjetas */

  /* Textos */
  --color-text-primary: #ffffff;
  --color-text-secondary: #b3b3b3;
  --color-text-muted: #6a6a6a;

  /* Bordes / separadores */
  --color-border: #333333;
}
```

## Tipografía

Spotify usa la fuente propietaria _Circular_. Como alternativa libre, puedes usar cualquiera de estas opciones enlazando desde Google Fonts:

- [Montserrat](https://fonts.google.com/specimen/Montserrat) — muy similar en proporciones y peso
- [DM Sans](https://fonts.google.com/specimen/DM+Sans) — cercana al estilo geométrico de Circular

```css
:root {
  --font-base: "Montserrat", "DM Sans", Helvetica, Arial, sans-serif;

  --font-size-xs: 0.75rem; /*  12px */
  --font-size-sm: 0.875rem; /*  14px */
  --font-size-base: 1rem; /*  16px */
  --font-size-md: 1.125rem; /*  18px */
  --font-size-lg: 1.5rem; /*  24px */
  --font-size-xl: 2rem; /*  32px */
  --font-size-2xl: 3rem; /*  48px */

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
}
```

## Espaciado

```css
:root {
  --spacing-xs: 0.25rem; /*  4px */
  --spacing-sm: 0.5rem; /*  8px */
  --spacing-md: 1rem; /* 16px */
  --spacing-lg: 2rem; /* 32px */
  --spacing-xl: 4rem; /* 64px */
  --spacing-2xl: 6rem; /* 96px */
}
```

## Bordes y radios

```css
:root {
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-full: 500px; /* Para botones en píldora */
}
```

## Breakpoints de referencia
Si necesitas breakpoints puedes utilizar estas referencias

```css
/* Tablet */
@media (min-width: 768px) { ... }

/* Desktop */
@media (min-width: 1024px) { ... }

/* Desktop ancho */
@media (min-width: 1440px) { ... }
```
