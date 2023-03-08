const parseSanityData = async function (data, options) {
  const cleanData = data.map(
    ({ _id, id, title, published, description, file, coverArt }) => {
      console.log('Musi_File', file.asset._ref)
      const audioField = file.asset._ref.split('-')
      console.log('OPTION', options)
      const audioUrl = `${
        'https://cdn.sanity.io/files/' +
        options.PROJECT_ID +
        '/' +
        options.DATA_SET +
        '/' +
        audioField[1] +
        '.' +
        audioField[2]
      }`

      const covertArtRef = coverArt.asset._ref
        ? coverArt.asset._ref.split('-')
        : null

      console.log('COVER_ART_REF', covertArtRef)
      console.log(
        'ART FILE',
        'https://cdn.sanity.io/files/' +
          options.PROJECT_ID +
          '/' +
          options.DATA_SET +
          '/' +
          covertArtRef[1] +
          '.' +
          '-' +
          covertArtRef[2] +
          covertArtRef[3]
      )
      const coverArtUrl = `${
        'https://cdn.sanity.io/files/' +
        options.PROJECT_ID +
        '/' +
        options.DATA_SET +
        '/' +
        covertArtRef[1] +
        '.' +
        covertArtRef[2] +
        [3]
      }`

      return {
        id: _id,
        itemId: id,
        title: `${id}: ${title}`,
        coverArt: (coverArt && coverArt.asset) || '',
        published: published || 'unspecified',
        description: description || 'No description available',
        audio: { src: audioUrl, type: file._type },
      }
    }
  )
  return cleanData
}

export default parseSanityData
