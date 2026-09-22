import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {media} from 'sanity-plugin-media'

import {schemaTypes} from './sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Beyond Scrumptious',

  projectId: '8mwfu81d',
  dataset: 'production',

  plugins: [structureTool(), media()],

  schema: {
    types: schemaTypes,
  },
})