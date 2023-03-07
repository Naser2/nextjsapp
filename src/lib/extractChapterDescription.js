export function extractChapterDescription(mdxFileContent, options) {
  // console.log('MDX-CONTENT: ', mdxFileContent)
  // console.log('MDX-FILE_: ', mdxFileContent)
  //  Extract the chapter description
  let chapterDescription
  //Target Named MDXExports
  const preChapterDesciptionNameExport = 'export const ='
  //Mesure the chapter description length
  const preCHapterDescriptionLength = preChapterDesciptionNameExport.length
  //Find the chapter description index on the specified doc
  const chapterDescriptionIndex = mdxFileContent.indexOf('description')
  //Slice unparsed description
  let unparsedDescription = mdxFileContent.slice(
    chapterDescriptionIndex + preCHapterDescriptionLength + 3,
    mdxFileContent.indexOf('.')
  )
  console.log('UNPARSED: ', unparsedDescription)
  chapterDescription = unparsedDescription.replace(/^\"|\"$/g, '')

  // console.log('CHAPTER-DESCRIPTION_SLICED: ', chapterDescription)
  // JSON.stringify(description)
  // console.log(
  //   'EXTRACTED-PARSEED-CHAPTER-DESCRIPTION: ',
  //   JSON.stringify(chapterDescription)
  // )
  return chapterDescription
}
