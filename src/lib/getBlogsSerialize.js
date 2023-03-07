import glob from 'fast-glob'
import * as path from 'path'

async function importBlogs(blogsFilename) {
  // console.log('FILE_NAME: ' + blogsFilename)
  // const fullPath = path.join('src/pages/blogs', blogsFilename)

  // const response = fs.readFileSync(fullPath, 'utf-8')
  // console.log('response: ' + response)
  // let blog = await import(`../pages/blogs/${blogsFilename}`)
  // console.log('FS RESPONSE BLOG', response)
  // let blog = matter(response)

  // const serializedContent = await serialize(blog, {
  //   format: 'mdx',
  //   frontmatter: true,
  //   mdxOptions: {
  //     // providerImportSource: '@mdx-js/react',
  //     // remarkPlugins: [remarkPlugins],
  //     // rehypePlugins: [rehypePlugins],
  //     // recmaPlugins: [recmaPlugins],
  //   },
  // })
  // console.log('SERIALIZED BLOG', serializedContent)
  // })(subDirectoriesAbsolutePath, file)
  // const content = fs.readFileSync(fullPath, 'utf-8')
  // console.log('Blo: ', blog)
  let { meta, default: component } = await import(
    `../pages/blogs/${blogsFilename}`
  )
  // console.log('DEFAULT_COMPONENT: ', meta)
  return {
    slug: blogsFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getBlogs() {
  let blogsFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/blogs'),
  })

  let blogs = await Promise.all(blogsFilenames.map(importBlogs))
  // console.log('BLOGS: ' + blogs)
  blogs.map((b) => {
    // console.log('BLOG: ', b)
  })
  return blogs.sort((a, z) => new Date(z.date) - new Date(a.date))
}
