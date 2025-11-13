import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: undefined,
      precompress: false,
    }),
    paths: {
      base: "/cossacks-replay-parser-svelte",
    }, 
  },
};

export default config;
