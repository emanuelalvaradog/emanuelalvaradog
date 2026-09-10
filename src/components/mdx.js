import NextImage from "next/image";

/**
 * Componentes disponibles dentro de los .mdx.
 * `Image` ignora el width/height del markdown y se sirve a ancho completo:
 * los posts viejos traían 100x100 heredado de otra plantilla.
 */
export const mdxComponents = {
  Image: ({ src, alt = "", ...rest }) => (
    <NextImage
      src={src}
      alt={alt}
      width={1200}
      height={800}
      sizes="(max-width: 700px) 100vw, 640px"
      style={{ width: "100%", height: "auto" }}
      {...rest}
    />
  ),
};
