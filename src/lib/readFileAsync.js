import fs from 'fs'
import path from 'path'
import getCourses from './getCourses'
import { writeFileAsync } from './feedCurriculums/writeFileAsync'
export default async function readFileAsync(filePath, encoding) {
  const targetPath = path.join(process.cwd(), `src/pages/${filePath}`)
  // console.log('FULPATH', targetPath)
  let data
  if (fs.existsSync(filePath)) {
    console.log('THIS FILEPATH DOES NOT EXIST --Fectchimnh')
    data = await getCourses().then((data) =>
      writeFileAsync(data, '/curriculum', 'curriculum.json', 'utf8')
    )
    console.log('DATA FETCHED', data)
    writeFileAsync(data, '/curriculum', 'curriculum.json', 'utf8')
  } else {
    return (data = fs.readFileSync(targetPath, {
      encoding: encoding,
      flag: 'r',
    }))
  }

  try {
    console.log('DATA PARSED', JSON.parse(data))
    const parsedData = [].concat(...JSON.parse(data))
    // console.log('DATA', data)
    console.log('PARSED DATA', parsedData)
    return { status: 200, message: 'Success', data: parsedData }
  } catch (err) {
    console.log('AN ERRO OCCURED', err, { cause: err, code: err.code })
    return new Error({
      maessage: 'An error occured:',
      cause: err,
      code: err.code,
    })
  }
}
