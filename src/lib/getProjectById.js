import { slugify } from './slugify'
const getProjectById = async function (projects, projectId) {
  let project = projects
    .map(
      ({
        name,
        description,
        longDescription,
        projectImage,
        images,
        theme,
        tech,
        projectDetails,
      }) => ({
        name,
        description,
        longDescription,
        projectImage,
        images,
        theme,
        tech,
        projectDetails,
      })
    )
    .find(({ name }) => {
      console.log('NAMMMEEE', slugify(name), 'PROJJJJJJ-ID', projectId)
      return slugify(name) === projectId
    })

  console.log('PROJECT_ID', projectId, 'ITEM --->', project)

  return project
}

export default getProjectById
