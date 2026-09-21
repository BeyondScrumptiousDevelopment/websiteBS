'use client'

import {NextStudio} from 'next-sanity/studio'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

import {schemaTypes} from '../../sanity/schemaTypes'

const config = defineConfig({
  projectId: '8mwfu81d',
  dataset: 'production',
  title: 'Beyond Scrumptious',
  apiVersion: '2025-01-01',
  basePath: '/studio',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
})

export default function StudioPage() {
  return <NextStudio config={config} />
}
