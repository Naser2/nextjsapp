// Async functions and execution order
import { writeFileAsync } from '@/lib/feedCurriculums/writeFileAsync'
import getCourses from '@/lib/getCourses'
import { getBlogs } from '@/lib/getBlogsSerialize'
const getAllData = new Promise((resolve, reject) => {
  // const fs = require('fs')
  let courses = []
  let blogs = []

  try {
    let coursesData = getCourses()
    let blogsData = getBlogs()
    let courses = coursesData
    let blogs = blogsData
    return { courses, blogs }
  } catch (e) {
    console.log("ERROR: Couldn't get", e)
  }
})

export default async function getSiteData() {
  const response = await getAllData
    .then((response) => {
      let filteredResponse // console.log('VALUES Are OK.. Log Object further if need ', response)
      filteredResponse = response.filter((value) => value !== undefined)
      const coursesMeta = filteredResponse.flat()
      // console.log('MAIN_DOT_THEN', coursesMeta)
      return coursesMeta
    })
    .catch((err) => {
      console.log('ERROR IN CONCURENT', err)
    })

  return response
}
