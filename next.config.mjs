import nextMDX from '@next/mdx'
import { remarkPlugins } from './mdx/remark.mjs'
import { rehypePlugins } from './mdx/rehype.mjs'
import { recmaPlugins } from './mdx/recma.mjs'
// import  {UrlLoader} from 'url-loader'

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    // providerImportSource: '@mdx-js/react',
    remarkPlugins,
    //RehypePlugin for code-block style
    rehypePlugins,
    recmaPlugins,
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  experimental: {
    // appDir: true,
    scrollRestoration: true,
  },

  // distDir: 'build',
  // content: ['./src/**/*.{js,jsx}'],
  images: {
    domains: ['cdn.sanity.io', 'tailwindui.com', 'images.unsplash.com'],
    // loader: 'custom',

    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     domains: ['cdn.sanity.io'],
    //     loader: 'custom',
    //     port: '',
    //     pathname: '/account123/**',
    //   },
    // ],
  },
  webpack(config, options) {
    const { isServer } = options
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,

      exclude: config.exclude,
      // use: [
      //   {
      //     loader: 'url-loader',
      //     options: {
      //       limit: config.inlineImageLimit,
      //       fallback: 'file-loader',
      //       publicPath: `${config.assetPrefix}/_next/static/images/`,
      //       outputPath: `${isServer ? '../' : ''}static/images/`,
      //       name: '[name]-[hash].[ext]',
      //       esModule: config.esModule || false,
      //     },
      //   },
      // ],
    })

    return config
  },
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
  //     config.resolve.fallback = {
  //       fs: false,
  //     }
  //   }

  //   return config
  // },
}

export default withMDX(nextConfig)
