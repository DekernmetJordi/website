import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

// import compress from "astro-compress";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), sitemap({
    filter: page => page !== "https://dekernmetjordi.com/the-art-of-music-production" && page !== "https://dekernmetjordi.com/the-importance-of-audio-quality" && page !== "https://dekernmetjordi.com/tune-your-snare-drum" && page !== "https://dekernmetjordi.com/gear-is-insanely-expensive" && page !== "https://dekernmetjordi.com/guitar-solos-are-still-awesome" && page !== "https://dekernmetjordi.com/live-music-is-crucial" && page !== "https://dekernmetjordi.com/making-a-home-studio" && page !== "https://dekernmetjordi.com/creating-a-successful-music-brand" && page !== "https://dekernmetjordi.com/bammm" && page !== "https://dekernmetjordi.com/behind-the-scenes-with-our-artists" && page !== "https://dekernmetjordi.com/blog" && page !== "https://dekernmetjordi.com/blog/1" && page !== "https://dekernmetjordi.com/blog/2" && page !== "https://dekernmetjordi.com/blog/3" && page !== "https://dekernmetjordi.com/category/career%20advice" && page !== "https://dekernmetjordi.com/category/insights" && page !== "https://dekernmetjordi.com/category/latest" && page !== "https://dekernmetjordi.com/category/persoonlijk" && page !== "https://dekernmetjordi.com/category/reiki" && page !== "https://dekernmetjordi.com/category/something%20cool" && page !== "https://dekernmetjordi.com/category/studio%20tips" && page !== "https://dekernmetjordi.com/collaboration-in-music-production"
  }), partytown()
  // compress()
  ],
  site: "https://dekernmetjordi.com",
  output: "hybrid",
  adapter: netlify()
});