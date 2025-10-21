importScripts('https://cdn.jsdelivr.net/gh/Mrgoldilocks/elixir@main/js/uv/uv.bundle.js');
importScripts('https://cdn.jsdelivr.net/gh/Mrgoldilocks/elixir@main/js/uv/uv.config.js');
importScripts('https://cdn.jsdelivr.net/gh/Mrgoldilocks/elixir@main/js/uv/uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
