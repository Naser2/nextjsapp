import Head from 'next/head'

import { BlogListLayout } from '@/components/BlogListLayout'

import { BlogCard } from '@/components/BlogCard'
import { getBlogs } from '@/lib/getBlogs'
import blogsJson from '../../lib/blogsJson'
// import { BlogsSample } from '../SampleBlogs'
import { ContainerNoPadding } from '@/components/Container'
import Link from 'next/link'
export default function ArticlesList({ blogs }) {
  const reversedBlogs = blogsJson.reverse()
  console.log(' REVERSED: ' + reversedBlogs[0])
  return (
    <>
      <Head>
        <title>Articles - NasDesign</title>
        <meta
          name="description"
          content="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
        />
      </Head>

      <BlogListLayout
        bgColor="black"
        band
        bandcolor="bg-green-2"
        className="bg-white"
        // title="Writing on software design, company building, and the aerospace industry."
        // intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
      >
        <div className="blog-list bg-black">
          <ContainerNoPadding className="w-full bg-slate-800 px-6 lg:py-20 lg:px-32">
            <h2 className="headline typography-headline  max-w-8xl py-10 text-slate-300  dark:text-slate-200 lg:pb-20 lg:text-center">
              Most recent blogs.
            </h2>
            <div className="modules-lib__three-up-tile__grid glue-grid  ">
              {blogsJson
                // .reverse()
                .slice(0, 3)
                .map((blog) => {
                  return (
                    <div
                      key={blog.href}
                      className="blog modules-lib__three-up-tile__grid glue-grid__col glue-grid__col--span-4 py-8"
                      // className="modules-lib__three-up-tile__grid glue-grid__col glue-grid__col--span-4"
                    >
                      <div
                      // className="modules-lib__doorway-tile _unlocking-opportunity"
                      // data-g-module_name="Doorway Tile"
                      // data-g-module_id="unlocking-opportunity"
                      >
                        <Link
                          href={blog.href}
                          // target="_self"
                          // data-g-cta_type="module"
                          // data-g-cta_url="./commitments/#expanding_opportunity"
                          // data-g-cta_text="Learn more"
                          // data-g-alt_text="A hairdresser smiles while she uses a laptop on a small table in the salon."
                          // className="modules-lib__doorway-tile__link"
                          // data-g-module_position="2/3"
                        >
                          <div
                          // className="modules-lib__doorway-tile__body"
                          >
                            <div className="wide-width ">
                              {/* rounded-lg border */}
                              <picture>
                                <source
                                  srcSet={blog.image.src}
                                  media="(min-width: 1024px)"
                                />
                                <source
                                  srcSet={blog.image.src}
                                  media="(min-width: 600px)"
                                />
                                <source srcSet={blog.src} />
                                <img
                                  src={blog.image.src}
                                  className="img modules-lib__doorway-tile__image"
                                  alt="A hairdresser smiles while she uses a laptop on a small table in the salon."
                                />
                              </picture>
                            </div>
                            <h4 className="blog_trio_tile truncate py-3 text-slate-100">
                              {blog.title}
                            </h4>
                            <p className="modules-lib__doorway-tile__paragraph glue-mod-spacer-2-top glue-body" />
                            <p className="blog_trio_cta text-center">
                              Read more
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  )
                })}
            </div>
          </ContainerNoPadding>
          <div id="blog-list-desktop-wrapper" className="pb-20 pt-24 lg:pb-44">
            {reversedBlogs.reverse().map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        </div>
        {/* </div> */}
      </BlogListLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      blogs: (await getBlogs()).map(({ component, ...meta }) => meta),
    },
  }
}
