import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {seoMetaFields} from 'sanity-plugin-seo'

export default defineConfig({
  name: 'default',
  title: 'season26',

  projectId: '02jhhvr4',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), seoMetaFields()],

  schema: {
    types: schemaTypes,
  },
})
