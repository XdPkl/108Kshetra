import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import {visionTool} from '@sanity/vision';
import {schemaTypes} from './schemas/index.js';
import structure from './structure.js';

const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET ?? 'production';

if (!projectId) {
  // `sanity dev`/`sanity deploy` refuse to start without a project; give a
  // actionable message instead of the generic runtime error.
  throw new Error(
    'Set SANITY_STUDIO_PROJECT_ID (see studio/.env.example) — create the free project at https://www.sanity.io/manage',
  );
}

export default defineConfig({
  name: 'kshetra-content-studio',
  title: '108 Kshetrams — Content Studio',
  projectId,
  dataset,
  plugins: [structureTool({structure}), visionTool()],
  schema: {types: schemaTypes},
});
