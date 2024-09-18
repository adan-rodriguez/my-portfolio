import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [
    tailwind({
      // Example: Permite escribir declaraciones CSS anidadas
      // junto con la sintaxis de Tailwind
      nesting: true,
    }),
  ],
  site: "https://adanrodriguez.vercel.app/",
});
