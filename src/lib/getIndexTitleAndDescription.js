export function getIndexTitleAndDescription(mdxContent, options) {
  //   console.log('FILE-EXCERPT', mdxContent.data)
  let title, description

  const titleIndex = mdxContent.indexOf('#')
  // console.log('TITLE_INDEX: ', titleIndex)
  // const titleHtml = mdxContent.slice(titleIndex, '.')
  // console.log('TITLE_HTML_', titleHtml)
  // const titleLength = title.length

  // console.log('TITLE_INDEX_LENGHT', titleLength)
  // title = mdxContent.split('\n').slice(1, 20)

  title = mdxContent.slice(titleIndex, 500)
  // console.log('FIRST ODT BEGINS: ', mdxContent.indexOf('.'))
  // console.log('DOCUMENT_TITLE: ', title)
  // console.log('DONE')
  // let titleSliced = title.slice(400, 420).join(' ')
  // console.log('TITLE_SLICED: ', titleSliced)

  //   console.log('DESCRIPTION INDEX: ', descriptionIndex)
  const preDescription = 'export const ='
  const preDescriptionLength = preDescription.length

  const descriptionIndex = mdxContent.indexOf('description')
  // console.log('PRE_DESCRIPTION_LENGTH: ', descriptionIndex)
  // console.log('DONNEEE')
  let unparsedDescription = mdxContent.slice(
    descriptionIndex + preDescriptionLength + 3,
    mdxContent.indexOf(-1)
  )

  // console.log('UNPARSED_DESCRIPTION: ', unparsedDescription)
  // description = unparsedDescription.split('\n').slice(0, 1).join(' ')
  // console.log('DESCRIPTION_SLICED: ', description)
  // JSON.stringify(description)
  description = 'hello World'
  return { description }
}
