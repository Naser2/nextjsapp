import {defineCliConfig} from 'sanity/cli'

import {keys} from '../keys'
export default defineCliConfig({
  api: {
    projectId: keys.PROJECT_ID,
    dataset: keys.DATA_SET,
  },
})
