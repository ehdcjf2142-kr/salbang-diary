// @ts-check
import { defineConfig } from 'astro/config';

const site = process.env.PUBLIC_SITE_URL ?? 'https://YOUR_USERNAME.github.io';

let base = process.env.PUBLIC_BASE ?? '/salbang-diary/';
if (!base.startsWith('/')) base = `/${base}`;
if (!base.endsWith('/')) base = `${base}/`;

// https://astro.build/config
export default defineConfig({
	site,
	base,
	output: 'static',
});
