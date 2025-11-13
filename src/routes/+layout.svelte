<script>
  import '../app.css';
  import CanvasContainer from '$lib/components/CanvasContainer.svelte';
  import FPSCounter from '$lib/components/FPSCounter.svelte';
  export const prerender = true;
</script>

<svelte:head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Parse and analyze Cossacks 3 replay files directly in your browser. Upload .rep replays to inspect players, resources, and match statistics." />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://vsolanogo.github.io/cossacks-replay-parser-svelte/" />
  <link rel="icon" type="image/svg+xml" href="/cossacks-replay-parser-svelte/favicon.png" />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://vsolanogo.github.io/cossacks-replay-parser-svelte/" />
  <meta property="og:title" content="Cossacks 3 Replay Parser" />
  <meta property="og:description" content="Parse and analyze your Cossacks 3 replay files in the browser to review players, resources, and match statistics from .rep files." />
  <meta property="og:site_name" content="Cossacks 3 Replay Parser" />

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Cossacks 3 Replay Parser" />
  <meta name="twitter:description" content="Upload .rep replay files to inspect Cossacks 3 matches, players, and resources directly in your browser." />

  <title>Cossacks 3 Replay Parser</title>
</svelte:head>

<!-- Сначала рендерим основной контент, затем канвас на заднем плане -->
<div class="app-wrapper">
  <slot />
</div>

<CanvasContainer />
<FPSCounter />
