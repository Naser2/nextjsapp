// Async functions and execution order
import fs from 'fs'
// const path = require('path')
import * as path from 'path'

import matter from 'gray-matter'

import { extractChapterDescription } from '@/lib/extractChapterDescription'

import * as acorn from 'acorn'
import { getRequestMeta } from 'next/dist/server/request-meta'

const root = path.join(process.cwd(), 'src/pages/courses')

const isFile = (fileName) => {
  console.log('IS', fileName, fs.lstatSync(fileName).isFile())
  return fs.lstatSync(fileName).isFile()
}
const isMdxFile = (fileName) => {
  return path.extname(fileName) === '.mdx'
}
//Get Course Meta
function getCourseMeta(mdxContent) {
  const exportStatement = 'meta ='
  const descriptionIndex = mdxContent.indexOf('meta')
  const exportStatementLength = exportStatement.length

  let unparsedMeta = mdxContent.slice(
    descriptionIndex + exportStatementLength,
    mdxContent.indexOf('export const metadataClosed ')
  )

  // console.log('EXTRACTED META', unparsedMeta)
  const courseMeta = unparsedMeta
  return courseMeta

  // description = unparsedDescription.split('\n').slice(0).join(' ')
  // ///-----------METADATA ----------------------
  // const metaStatement = 'meta ='
  // const metaIndex = mdxContent.indexOf('meta = {')
  // const metaExportStatementLength = metaStatement.length
}
//GET COURSE DESCRIPTION
function getCourseDescription(mdxContent, options) {
  const { excerpt } = options
  const { data, content } = matter(mdxContent)
  let title, description
  // console.log('DATA', data, 'CONETNET', content)
  const titleIndex = mdxContent.indexOf('#')
  // console.log('TITLE', titleIndex)
  title = mdxContent.slice(titleIndex, 500)
  const preDescription = 'export const ='
  // console.log('PRE-DESCRIPTION', preDescription)
  // const preDescriptionLength = preDescription.length
  const exportStatement = 'shortDescription:'
  const descriptionIndex = mdxContent.indexOf('shortDescription:')
  const exportStatementLength = exportStatement.length

  // console.log('DESCRIPTION  INDEX', descriptionIndex)

  let unparsedDescription = mdxContent.slice(
    descriptionIndex + exportStatementLength,
    mdxContent.indexOf('*')
  )
  // console.log('UNPARSED  --->', unparsedDescription)

  description = unparsedDescription.split('\n').slice(0).join(' ')
  ///-----------METADATA ----------------------
  const metaStatement = 'meta ='
  const metaIndex = mdxContent.indexOf('meta =')
  const metaExportStatementLength = metaStatement.length

  let unparsedMetaObj = mdxContent.slice(
    metaIndex + metaExportStatementLength,

    mdxContent.indexOf('export const metadataClosed')
  )

  // Object.keys(mdxContent).forEach((key, value) => {
  //   console.log('KEY: ', key, 'VALUE', value)
  // })
  // Object.entries(unparsedMetaObj)
  //   .slice(0)
  //   .map((entry) => {
  //     console.log('ENTRY:', entry)
  //   })

  // for (const [key, value] of Object.entries(mdxContent)) {
  //   console.log(`KEY: ${key}: VALUE: ${value}`)
  // }

  // console.log(
  //   'MetaData PARSED-->',
  //   unparsedMetaObj.split('\n').slice(0, -1).join(' ')
  // )
  // let metaEscaped = unparsedMetaObj.split('\n').slice(0, -1).join(' ')
  let metaEscaped = unparsedMetaObj
  let metaNoQuotes = metaEscaped.slice(1, metaEscaped.length - 1)
  let cleanMeta = metaNoQuotes

  // const serializeContent = await serialize(unparsedMetaObj, {
  //   format: 'mdx',
  //   parseFrontmatter: true,
  //   mdxOptions: {
  //     // providerImportSource: '@mdx-js/react',
  //     remarkPlugins: [remarkPlugins],
  //     rehypePlugins: [rehypePlugins],
  //     recmaPlugins: [recmaPlugins],
  //   },
  // })

  // console.log('JSSERIALIZATION', typeof serializeContent)
  // cleanMeta.slice(1, cleanMeta.length - 1)
  // ----------------------------- MAIN -----------------------------
  // function clean($string) {
  //   $string = str_replace(' ', '-', $string) // Replaces all spaces with hyphens.
  //   const rmChars = preg_replace('/[^A-Za-z0-9-]/', '', $string)
  //   console.log('R-M-CHARS', rmChars)
  //   return rmChars // Removes special chars.
  // }
  // console.log('CHECK_OBJ', typeof cleanMeta)
  // const premMainDocData = 'mainDocData = '
  // const preMainDocDataLength = premMainDocData.length
  // const mainDocDataIndex = mdxContent.indexOf('mainDocData =')
  // let unparsedMainDocData = mdxContent.slice(
  //   mainDocDataIndex,
  //   mdxContent.indexOf(40)
  // )

  // console.log('MAIN_DATA-->', unparsedMainDocData)
  // console.log('BEFORE_EXPORTS_FUNC')
  function rehypeAddMDXExports(content) {
    // console.log('IN_EXPORTS_FUNC')
    // for (const [key, value] of Object.entries(content)) {
    //   console.log(`${key}: ${value}`)
    // }
    // let exports = Object.entries(content)
    // console.log('EXPORTS_FUNC: EXPORTS', content['exports'])
    const estractedFrontDocData = []
    console.log('DOC_TREE:', content.children)
    return (tree) => {
      console.log('DOC_TREE:', content.children)
      // let exports = Object.entries(content(tree))
      console.log('EXPORTS', exports)
      for (let [name, value] of exports) {
        for (let node of tree.children) {
          console.log('NODE_TYPE', node.type)
          console.log('NODE', node)
          if (
            node.type === 'mdxjsEsm' &&
            new RegExp(`export\\s+const\\s+${name}\\s*=`).test(node.value)
          ) {
            console.log('EXPORTS_IS_ESM', node.type)
            return
          }
        }

        let exportStr = `export const ${name} = ${value}`
        console.log('EXPORTS_STATEMENT', exportStr)
        tree.children.push({
          type: 'mdxjsEsm',
          value: exportStr,
          data: {
            estree: acorn.parse(exportStr, {
              sourceType: 'module',
              ecmaVersion: 'latest',
            }),
          },
        })
      }
    }
  }
  rehypeAddMDXExports(content)
  // console.log('AFTER_EXPORTS_FUNC')
  ///----------------------------------------------------------------
  // console.log('DESCRIPTION--->', description)
  // console.log('<----DONE--->')
  // : description.replace(/^\s+|\s+$/gm, '')
  return { description, cleanMeta }
}

// GET ------------------ CHAPTERS
function getChapters(
  courseModuleFiles,
  subDirectoriesAbsolutePath,
  courseSlug
) {
  let chapters = []
  let chapterNumber = 0
  if (typeof courseModuleFiles === 'undefined') return
  try {
    courseModuleFiles.map((file) => {
      const fullPath = path.join(subDirectoriesAbsolutePath, file)
      const content = fs.readFileSync(fullPath, 'utf-8')
      const { data, content: mdxContent } = matter(content)

      const chaptName = path.basename(file, '.mdx')

      const chapterName = chaptName.charAt(0).toUpperCase() + chaptName.slice(1)
      // Extract the slug by replacing spaces with dashes and lowercasing the chapter name
      let mdxFileContent = mdxContent

      // console.log('CHAPTER NAME: ', chapterName)

      let chapterDescription = extractChapterDescription(mdxFileContent)

      let readTime = ''
      chapterNumber = chapterNumber + 1
      chapters.push({
        title: chapterName,
        description: chapterDescription,
        slug: `${courseSlug}/${chaptName}`,
        chapterNumber,
        readTime,
      })
    })
    return chapters
  } catch (error) {
    console.log('ERROR IN GET CHAPTERS: ', error)
  }
}

// ---------------------------
// GET COURSE
const isModuleFile = (subDirectoriesAbsolutePath) => {
  if (typeof subDirectoriesAbsolutePath === 'undefined') {
    console.log(`MODULE PATH in isModuleFile ${subDirectoriesAbsolutePath}`)
    return
  } else {
    let isModule = fs.lstatSync(subDirectoriesAbsolutePath).isDirectory()
    return isModule
  }
}

function getCourse(subDirectoriesAbsolutePath, folderName) {
  //   console.log('COURSE_SUBDIRECTORY_FOLDER_NAME: ', folderName)
  //   console.log('COURSE_SUBDIRECTORY_ABSOLUTE_PATH: ', subDirectoriesAbsolutePath)

  if (typeof subDirectoriesAbsolutePath === 'undefined') {
    // console.log(
    //   'COURSE_SUBDIRECTORY_ABSOLUTE_PATHIS_IS_UNDEFINED-->',
    //   subDirectoriesAbsolutePath
    // )
    return
  }
  if (typeof folderName === 'undefined') {
    // console.log('COURSE_FOLDER_NAME__IS_UNDEFINED-->', folderName)
    return
  } else {
    const isModule = isModuleFile(subDirectoriesAbsolutePath)
    const { dir, name, ext } = path.parse(subDirectoriesAbsolutePath) //causes error

    const course = { chapters: [], meta: {} }

    let parentDir = dir
    let currentDir = subDirectoriesAbsolutePath
    let currentDirName = name
    let description
    let unparsedMetaObj = []
    let shortDescription

    const courseSlug = subDirectoriesAbsolutePath.slice(dir.indexOf(folderName))
    // const courseCurriculumSlug = `curriculum/${courseSlug}`
    // console.log('courseCurriculumSlug', courseCurriculumSlug)
    // console.log('==GET COURSE FUNC')

    try {
      //   console.log('*************** FOLDER_NAME', folderName)
      if (folderName.startsWith('indexes')) return
      if (fs.lstatSync(subDirectoriesAbsolutePath).isDirectory()) {
        // console.log(
        //   'GET COURSE filePath.isDirectory()',
        //   fs.lstatSync(subDirectoriesAbsolutePath).isDirectory()
        // )

        const courseModuleFiles = fs.readdirSync(subDirectoriesAbsolutePath)
        const courseChaptersLength = courseModuleFiles.length
        course.numberOfChapters = courseChaptersLength

        courseModuleFiles.map((file) => {
          // console.log('COURSE EACH FILE..', course)
          const fullPath = path.join(subDirectoriesAbsolutePath, file)
          const content = fs.readFileSync(fullPath, 'utf-8')

          if (file === 'index.mdx') {
            // console.log('IMPORT ARTICLE FUNCTION')
            // async function importArticle(file) {
            //   console.log('FILE_NAME: ' + file)
            //   console.log(
            //     'FILE_PATH: ' + `${subDirectoriesAbsolutePath}/${file}`
            //   )

            //   const { meta, default: component } = await import(
            //     `/Users/nassersanou/nextjs-app/src/pages/courses/dev/aws-and-the-cloud/index.mdx`
            //   )
            //   console.log('METADATA: ', meta, component)
            //   // return {
            //   //   slug: file.replace(/(\/index)?\.mdx$/, ''),
            //   //   ...meta,
            //   //   component,
            //   // }
            // }
            // importArticle(file)
            // console.log('JUST_CALLED_IMPORT ARTICLE FUNCTION')
            const { content: mdxContent } = matter(content)
            // console.log('MDX CONTENT', content)
            const { description, cleanMeta } = getCourseDescription(
              mdxContent,
              {
                excerpt: true,
              }
            )
            const courseMeta = getCourseMeta(mdxContent)
            // const courseMeta = unparsedMetaObj

            // --------------------
            const escapeCharactyers = cleanMeta
            // .split('\n')
            // .slice(0, -1)
            // .join(' ')
            // console.log('ESCAPE ', escapeCharactyers)

            // ---------------
            const prarsedMeta = escapeCharactyers

            // .replace(
            //   '/[^A-Za-z0-9-]/',
            //   '',
            //   escapeCharactyers
            // )
            // console.log(
            //   'PPPPPPP-META',
            //   prarsedMeta
            // )
            // -------------------
            // const objectiFy = JSON.parse(`{${prarsedMeta}}`)
            // const serializeContent =serialize
            // console.log('OBJECTIFY ', objectiFy)
            // course.meta = prarsedMeta
            // console.log(
            //   'SHORT_DESCRIPTION',
            //   description.replace(/^\s+|\s+$/gm, '')
            // )
            // const { content } = matter(courseMeta)
            // console.log('MATTER_META', matterMetta)
            // const meta = matter(courseMeta)
            console.log(
              // 'JUST_META',
              courseMeta
                .replace(/^\s+|\s+$/gm, '')
                .split('\n')
                .slice(0, courseMeta.length + 1)
                .join(' ')
            )

            const x = Object.assign(courseMeta)
              .replace(/^\s+|\s+$/gm, '')
              .split('\n')
              .slice(0, courseMeta.length + 1)
              .join(' ')

            let met = x.substring(0, x.length)
            // console.log('XXXXX->>>', met)

            course['shortDescription'] = description.replace(/^\s+|\s+$/gm, '')
            // course['meta'] = courseMeta
            // course['mdxContent'] = mdxContent
            // content
            // JSON.stringify(matterMetta.content)
            //  courseMeta
            //   .replace(/^\s+|\s+$/gm, '')
            //   .split('\n')
            //   .slice(0, courseMeta.length + 1)
            //   .join(' ')

            console
              .log
              // 'COURSE_DESCRIPT',
              // description,
              // 'METADATA',
              // unparsedMetaObj,
              // 'COURSE_META Witout chapters',
              // // course.meta.json()
              // course
              // split('\n').slice(0, 1).join(' ')
              //c
              ()
            // let parsedReviews =
            // course.reviews.push(reviews)
            // course.meta = unparsedMetaObj
            return { description }
          }
          // 0- Extract the course name from the file path from the directory name
          const courseName = name.slice(0, 1).toUpperCase() + name.slice(1)

          // 1- Set current  Course Description by parsing the index file in current course folder

          // course.reviews.push(reviews)
          // console.log('COURSE DESCRIPTION: ', course.description)
          // 2- Set the current  Course Slug by extracting the the slug form the file name  and appending
          //A coward slash to the folder name followed by   the chapter name (current file name) to lowercase

          //3- Set current Course numb of chapt,
          //4- Set the current  Course readTime etc..
          // Extract the chapter name by removing the extension from the filename
          // Extract the slug by replacing spaces with dashes and lowercasing the chapter name
          // console.log('COURSES SLUGGGG:', filePath.slice(dir.indexOf('dev')))
          // 5- Set the current  Course readTime etc..
          course.title = courseName
          course.courseSlug = courseSlug
          // course.meta = courseMeta
        })
        const chapters = getChapters(
          courseModuleFiles,
          subDirectoriesAbsolutePath,
          courseSlug
        )
        // console.log('CHAPTERS:', chapters)
        course.chapters.push(chapters)
        const courses = []
        courses.push(course)
        // console.log('COURSE_DONE:', course)
        // console.log('RESOLVING IN COURSE', chapters)
        // console.log('REVIEWS_COURSE IS DONE', course.reviews)
        return courses
      }
    } catch (error) {
      console.log('ERROR IN GET COURSE: ', error)
    }
  }

  // }
}

const mainFunc = new Promise((resolve, reject) => {
  // const fs = require('fs')
  let courses = []
  // let subDirectoriesAbsolutePath, folderName
  // const {xdddd }= await sddddd
  fs.readdirSync(root).forEach((folderName) => {
    if (folderName === '.DS_Store') {
      // console.log(`MAIN_IS ==${folderName}`)
      return
    }
    if (folderName === 'index.js') {
      // console.log(`MAIN_IS ==${folderName}`)
      return
    }
    if (typeof folderName === 'undefined') {
      // console.log(`MAIN_IS_UNDEFINED==${folderName}`)
      return
    }
    if (folderName === 'course') return
    // const {xdddd }= await sddddd
    // if (modulePath.endsWith('.DS_Store')) {
    //   console.log(
    //     `CONCURRENTN_DS_FILTERED==${folderName} CONCURRENT MOD-PATH== ${modulePath}`
    //   )
    //   return
    // }
    else {
      // console.log(`MIAN_FOLDER_NAME==${folderName}`)
      const modulePath = path.join(root, folderName)
      const isModule = fs.lstatSync(modulePath).isDirectory()
      // console.log('MAINT_MODULE-->', modulePath)
      try {
        if (
          path.join(root, folderName).endsWith('.DS_Store') ||
          isMdxFile(folderName)
        ) {
          // console.log('IS DS STORE', modulePath)
          return
        } else if (!isModule) {
          // console.log('IS NOT A MODULE', modulePath)

          return
        } else if (typeof modulePath === 'undefined') {
          //   console.log('MODULE IS UNDEFINED-->', modulePath)
          return
        } else {
          // console.log('MODULE_PATH_AFTER_CHECKS', modulePath)

          fs.readdir(modulePath, (err, subDirectoriesNames) => {
            subDirectoriesNames.forEach((subDirectoriesName) => {
              if (path.extname(subDirectoriesName) === '.mdx') {
                // do something with solatary MDX files
              }
              let subDirectoriesAbsolutePath = path.join(
                modulePath,
                subDirectoriesName
              )

              // const moduleName = extractModuleName(subDirectoriesAbsolutePath)
              //   console.log(
              //     'MAIN_MODULE_PATH',
              //     modulePath,
              //     'MAIN_SUB_DIRECTORIES_NAME',
              //     subDirectoriesName,
              //     'MAIN_SUB_DIRECTORIES_ABSOLUTE_PATH',
              //     subDirectoriesAbsolutePath
              //   )
              let course = getCourse(subDirectoriesAbsolutePath, folderName)
              // console.log('MAIN_COURSE:', course)
              courses.push(course)
              // console.log('MAIN_COURSES', courses)
              // return courses
              resolve(courses)
              // .then((result) => {
              //   console.log('MAIN_DOT_THEN', courses)
              // })
            })
          })
        }
      } catch (error) {
        console.log('ERROR_BEFORE_PASSING MODULE TO GET COURSE', error)
      }
    }
  })
})

export default async function concurrentPromise() {
  const response = await mainFunc
    .then((response) => {
      let filteredResponse // console.log('VALUES Are OK.. Log Object further if need ', response)
      filteredResponse = response.filter((value) => value !== undefined)
      const coursesMeta = filteredResponse.flat()
      // console.log('SUCCESS GETTING COURSES', coursesMeta)
      return coursesMeta
    })
    .catch((err) => {
      console.log('ERROR IN CONCURENT', err)
    })

  return response
}
