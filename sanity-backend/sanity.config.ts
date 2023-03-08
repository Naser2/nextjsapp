import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import KeysProvider from '../src/lib/keys'
const {PROJECT_ID, DATA_SET} = KeysProvider()

export default defineConfig({
  name: 'default',
  title: 'sanity-backend',
  projectId: PROJECT_ID,
  dataset: DATA_SET,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
