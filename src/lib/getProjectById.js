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
        projectDetails = [],
      }) => ({
        name,
        description,
        longDescription,
        projectImage,
        images,
        projectDetails,
      })
    )
    .find(({ name }) => slugify(name) === projectId)

  console.log('PROJECT_ID', projectId, 'ITEM --->', project)

  return project
}

export default getProjectById
