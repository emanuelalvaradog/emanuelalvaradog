import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // hay un package-lock.json suelto en ~/Developer; sin esto Turbopack
  // toma esa carpeta como raíz del workspace
  turbopack: { root: dir },
};

export default nextConfig;
