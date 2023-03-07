const highLightProject = (projectName, activeProjectTab, projectTheme) => {
  console.log(
    'TabName ' + projectName,
    'Active-Project from state',
    activeProjectTab,
    'theme ' + projectTheme.color
  )
  if (projectName === activeProjectTab) {
    console.log('USE-MEMO', activeProjectTab)
    return projectTheme.color
  }
}
export default highLightProject
