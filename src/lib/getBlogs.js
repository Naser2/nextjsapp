import glob from 'fast-glob'
import * as path from 'path'

async function importBlog(blogFilename) {
  // console.log('FILE_NAME: ' + blogFilename)
  let { meta, default: component } = await import(
    `../pages/blogs/${blogFilename}`
  )
  // console.log('METADATA: ', meta)
  // console.log('DEFAULT_COMPONENT: ' + component)
  return {
    slug: blogFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getBlogs() {
  let blogFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/blogs'),
  })

  let blogs = await Promise.all(blogFilenames.map(importBlog))

  return blogs
}
