import { slugify } from './slugify'
const getProjectById = async function (projects, projectId) {
  let project = projects
    .map(
      ({
        title,
        description,
        longDescription,
        projectImage,
        images,
        theme,
        tech,
        projectDetails,
      }) => ({
        title,
        description,
        longDescription,
        projectImage,
        images,
        theme,
        tech,
        projectDetails,
      })
    )
    .find(({ title }) => {
      console.log('NAMMMEEE', slugify(title), 'PROJJJJJJ-ID', projectId)
      return slugify(title) === slugify(projectId)
    })

  console.log('PROJECT_ID', projectId, 'ITEM --->', project)

  return project
}

export default getProjectById
