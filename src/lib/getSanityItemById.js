const returnPlayableUrl = function (file, options) {
  const audioField = file.asset._ref.split('-')
  console.log('AUDIO OPTIONS IN GET BY ID ', options)
  // console.log('AUDIO OPTIONS IN GET BY ID ', audioField)
  const audioUrl = `${
    'https://cdn.sanity.io/files/' +
    options.projectId +
    '/' +
    options.dataSet +
    '/' +
    audioField[1] +
    '.' +
    audioField[2]
  }`
  return { src: audioUrl, type: file._type }
}

const returnCoverArtUrl = function (coverArtDoc, options) {
  const coverField = coverArtDoc._ref.split('-')
  // console.log('AUDIO FILE', audioField)
  // image-7f956b7a8c86b01d47f9a05b325a36cdd6f27aad-2880x1314-jpg
  console.log('COVER DOC', coverArtDoc)
  const coverUrl = `${
    'https://cdn.sanity.io/images/' +
    options.projectId +
    '/' +
    options.dataSet +
    '/' +
    coverField[0] +
    '-' +
    coverField[1] +
    '-' +
    coverField[2] +
    '.' +
    coverField[3]
  }`
  console.log('COVER FILE', coverUrl)
  return { src: coverUrl, type: coverArtDoc._type }
}

const getSanityItemById = async function (data, paramsId, options) {
  let item = data
    .map(
      ({
        id,
        _id,
        title,
        published,
        description,
        file,
        coverArt,
        summary,
        content,
        note,
        sponsors,
        // linksList = 'null',
        reflinks,
      }) => ({
        id: _id,
        itemId: id.toString(),
        title: `${id}: ${title}`,
        published: published || 'unspecified',
        description: description || 'No description available',
        summary: summary,
        content: content,
        sponsors: sponsors ?? [' No sponsors for this podcast'],
        links: reflinks ?? ['No referer available'],

        note: note ?? 'No special note for this podcast',

        audio: returnPlayableUrl(file, options),
        coverArt: coverArt,
        // coverArt: returnCoverArtUrl(coverArt.asset, options),
      })
    )
    .find(({ id }) => id === paramsId)

  console.log('ITEM --->', item)
  return item
}

export default getSanityItemById
