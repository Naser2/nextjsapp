import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {keys} from '../src/lib/keys'
export default defineConfig({
  name: 'default',
  title: 'sanity-backend',
  projectId: keys.PROJECT_ID,
  dataset: keys.DATA_SET,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
