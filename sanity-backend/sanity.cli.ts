import {defineCliConfig} from 'sanity/cli'

import KeysProvider from '../src/lib/keys'
const {PROJECT_ID, DATA_SET} = KeysProvider()
export default defineCliConfig({
  api: {
    projectId: PROJECT_ID,
    dataset: DATA_SET,
  },
})
