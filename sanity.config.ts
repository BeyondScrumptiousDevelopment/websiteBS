import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {media} from 'sanity-plugin-media'

import {schemaTypes} from './sanity/schemaTypes'

const structure = (S: any) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Links Page')
        .child(S.document().schemaType('linksPage').documentId('linksPage')),
      S.divider(),
      ...S.documentTypeListItems().filter((item: any) => item.getId() !== 'linksPage'),
    ])

export default defineConfig({
  name: 'default',
  title: 'Beyond Scrumptious',

  projectId: '8mwfu81d',
  dataset: 'production',

  plugins: [structureTool({structure}), media()],

  schema: {
    types: schemaTypes,
  },
})