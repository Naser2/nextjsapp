export default {
  name: 'music',
  type: 'document',
  title: 'Music',

  fields: [
    {
      name: 'id',
      type: 'number',
      title: 'ID',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },

    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'coverArt',
      title: 'Cover art',
      type: 'image',
    },
    {
      name: 'published',
      type: 'string',
      title: 'Published',
    },
    {
      name: 'enclosures',
      title: 'Enclosures',
      type: 'array',
      of: [{src: 'url', type: 'file'}],

      // enclosures: [{src: 'url', type: 'file'}],
    },
    {
      name: 'file',
      title: 'Music media file',
      description: 'Most podcatchers support .mp3, but other audio-formats may work as well',
      type: 'file',
    },
    {
      name: 'duration',
      title: 'Duration',
      description: 'HH:MM:SS',
      type: 'string',
    },
  ],
  orderings: [
    {
      title: 'Publish Date, New',
      name: 'publishDateDesc',
      by: [{field: 'schedule.publish', direction: 'desc'}],
    },
    {
      title: 'Publish Date, Old',
      name: 'publishDateAsc',
      by: [{field: 'schedule.publish', direction: 'asc'}],
    },
  ],
}
