import { createClient } from 'next-sanity'
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

console.log('EVIRONMENT:', process.env.PROJECT_ID, process.env.DATA_SET)

export const client = createClient({
  projectId: process.env.PROJECT_ID,
  dataset: process.env.DATA_SET,
  useCdn: true, // set to `true` to fetch from edge cache
  // apiVersion: '2023-02-12', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getPosts() {
  const posts = await client.fetch('*[_type == "post"]')
  return posts
}

export async function createPost(Post) {
  const result = client.create(POSP)
  return result
}

export async function updateDocumentTitle(_id, title) {
  const result = client.patch(_id).set({ title })
  return result
}
