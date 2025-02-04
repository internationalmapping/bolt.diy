import { LLMManager } from '~/lib/modules/llm/manager';
import type { Template } from '~/types/template';

export const WORK_DIR_NAME = 'project';
export const WORK_DIR = `/home/${WORK_DIR_NAME}`;
export const MODIFICATIONS_TAG_NAME = 'bolt_file_modifications';
export const MODEL_REGEX = /^\[Model: (.*?)\]\n\n/;
export const PROVIDER_REGEX = /\[Provider: (.*?)\]\n\n/;
export const DEFAULT_MODEL = 'claude-3-5-sonnet-latest';
export const PROMPT_COOKIE_KEY = 'cachedPrompt';

const llmManager = LLMManager.getInstance(import.meta.env);

export const PROVIDER_LIST = llmManager.getAllProviders();
export const DEFAULT_PROVIDER = llmManager.getDefaultProvider();

export const providerBaseUrlEnvKeys: Record<string, { baseUrlKey?: string; apiTokenKey?: string }> = {};
PROVIDER_LIST.forEach((provider) => {
  providerBaseUrlEnvKeys[provider.name] = {
    baseUrlKey: provider.config.baseUrlKey,
    apiTokenKey: provider.config.apiTokenKey,
  };
});

// starter Templates

export const STARTER_TEMPLATES: Template[] = [
  /*{
    name: 'bolt-arcgis-map-components-vite',
    label: 'Create a web app using ArcGIS Map Components with Vite',
    description: 'Create a web app using ArcGIS Map Components with Vite',
    githubRepo: 'https://github.com/Esri/jsapi-resources/component-samples/map-components/tutorials/create-a-web-app-using-components-solution',
    tags: ['arcgis', 'vite', 'components'],
    icon: 'i-bolt:vite',
  },*/

  {
    name: 'bolt-arcgis-map-components-react',
    label: 'ArcGIS Map Components with React',
    description: 'ArcGIS Map Components using React and Vite',
    githubRepo: 'Esri/arcgis-maps-sdk-javascript-samples-beta/packages/map-components/templates/react',
    tags: ['arcgis', 'react', 'components'],
    icon: 'i-bolt:react',
  },
  
  {
    name: 'bolt-arcgis-map-components-vite',
    label: 'ArcGIS Map Components with Vite',
    description: 'ArcGIS Map Components using Vite',
    githubRepo: 'Esri/arcgis-maps-sdk-javascript-samples-beta/packages/map-components/templates/vite',
    tags: ['arcgis', 'vite', 'components'],
    icon: 'i-bolt:vite',
  },

  {
    name: 'bolt-arcgis-charts-components-react',
    label: 'ArcGIS Charts Components with React',
    description: 'ArcGIS Charts Components using React',
    githubRepo: 'Esri/arcgis-maps-sdk-javascript-samples-beta/packages/charts-components/templates/react',
    tags: ['arcgis', 'react', 'charts'],
    icon: 'i-bolt:react',
  },

  {
    name: 'bolt-arcgis-coding-components-react',
    label: 'ArcGIS Coding Components with React',
    description: 'ArcGIS Coding Components using React',
    githubRepo: 'Esri/arcgis-maps-sdk-javascript-samples-beta/packages/coding-components/templates/react',
    tags: ['arcgis', 'react', 'coding'],
    icon: 'i-bolt:react',
  },

  {
    name: 'bolt-arcgis-amd-script-tag',
    label: 'ArcGIS AMD Script Tag',
    description: 'ArcGIS Map Components using AMD',
    githubRepo: 'Esri/arcgis-maps-sdk-javascript-samples-beta/packages/map-components/templates/amd-script-tag',
    tags: ['arcgis', 'amd', 'components'],
    icon: 'i-bolt:amd',
  },

  // Calcite Components with React
  // https://github.com/Esri/calcite-design-system/tree/dev/examples/components/react
  {
    name: 'bolt-calcite-components-react',
    label: 'Calcite Components with React',
    description: 'Calcite Components using React',
    githubRepo: 'Esri/calcite-design-system/tree/dev/examples/components/react',
    tags: ['calcite', 'react', 'components'],
    icon: 'i-bolt:react',
  },

  /*
  {
    name: 'bolt-astro-basic',
    label: 'Astro Basic',
    description: 'Lightweight Astro starter template for building fast static websites',
    githubRepo: 'thecodacus/bolt-astro-basic-template',
    tags: ['astro', 'blog', 'performance'],
    icon: 'i-bolt:astro',
  },
  {
    name: 'bolt-nextjs-shadcn',
    label: 'Next.js with shadcn/ui',
    description: 'Next.js starter fullstack template integrated with shadcn/ui components and styling system',
    githubRepo: 'thecodacus/bolt-nextjs-shadcn-template',
    tags: ['nextjs', 'react', 'typescript', 'shadcn', 'tailwind'],
    icon: 'i-bolt:nextjs',
  },
  {
    name: 'bolt-qwik-ts',
    label: 'Qwik TypeScript',
    description: 'Qwik framework starter with TypeScript for building resumable applications',
    githubRepo: 'thecodacus/bolt-qwik-ts-template',
    tags: ['qwik', 'typescript', 'performance', 'resumable'],
    icon: 'i-bolt:qwik',
  },
  {
    name: 'bolt-remix-ts',
    label: 'Remix TypeScript',
    description: 'Remix framework starter with TypeScript for full-stack web applications',
    githubRepo: 'thecodacus/bolt-remix-ts-template',
    tags: ['remix', 'typescript', 'fullstack', 'react'],
    icon: 'i-bolt:remix',
  },
  {
    name: 'bolt-slidev',
    label: 'Slidev Presentation',
    description: 'Slidev starter template for creating developer-friendly presentations using Markdown',
    githubRepo: 'thecodacus/bolt-slidev-template',
    tags: ['slidev', 'presentation', 'markdown'],
    icon: 'i-bolt:slidev',
  },
  {
    name: 'bolt-sveltekit',
    label: 'SvelteKit',
    description: 'SvelteKit starter template for building fast, efficient web applications',
    githubRepo: 'thecodacus/bolt-sveltekit-template',
    tags: ['svelte', 'sveltekit', 'typescript'],
    icon: 'i-bolt:svelte',
  },
  {
    name: 'vanilla-vite',
    label: 'Vanilla + Vite',
    description: 'Minimal Vite starter template for vanilla JavaScript projects',
    githubRepo: 'thecodacus/vanilla-vite-template',
    tags: ['vite', 'vanilla-js', 'minimal'],
    icon: 'i-bolt:vite',
  },
  {
    name: 'bolt-vite-react',
    label: 'React + Vite + typescript',
    description: 'React starter template powered by Vite for fast development experience',
    githubRepo: 'thecodacus/bolt-vite-react-ts-template',
    tags: ['react', 'vite', 'frontend'],
    icon: 'i-bolt:react',
  },
  {
    name: 'bolt-vite-ts',
    label: 'Vite + TypeScript',
    description: 'Vite starter template with TypeScript configuration for type-safe development',
    githubRepo: 'thecodacus/bolt-vite-ts-template',
    tags: ['vite', 'typescript', 'minimal'],
    icon: 'i-bolt:typescript',
  },
  {
    name: 'bolt-vue',
    label: 'Vue.js',
    description: 'Vue.js starter template with modern tooling and best practices',
    githubRepo: 'thecodacus/bolt-vue-template',
    tags: ['vue', 'typescript', 'frontend'],
    icon: 'i-bolt:vue',
  },
  {
    name: 'bolt-angular',
    label: 'Angular Starter',
    description: 'A modern Angular starter template with TypeScript support and best practices configuration',
    githubRepo: 'thecodacus/bolt-angular-template',
    tags: ['angular', 'typescript', 'frontend', 'spa'],
    icon: 'i-bolt:angular',
  },
  */
];
