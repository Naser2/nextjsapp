import fs from 'fs'
import path from 'path'

export async function writeFileAsync(data, location, fileType, ecncoding) {
  //set the file path ex: '/public/courseViews.json
  const targetPath = path.join(process.cwd(), `./public/${location}`)
  // console.log(
  //   'LOCATION:',
  //   location,
  //   'DATA:',
  //   data,
  //   typeof data,
  //   'FILE-PATH:',
  //   targetPath
  // )
  const dirPath = path.dirname(targetPath)
  //Check for directory eventual existence prior to creating the directory.
  async function ensureDirExists(dirPath) {
    if (fs.existsSync(dirPath)) {
      return { message: `Dirname already exists:  ${dirPath}:` }
    } else {
      console.log('2- CREATING DIR:')
      createDir(dirPath)
    }

    return dirPath
  }
  // cretae the directory function
  async function createDir(dirPath) {
    console.log('DATA IN WRITE ASYNC', data)
    fs.mkdirSync(dirPath, { recursive: true }, (err) => {
      return err
        ? console.error('AN ERROR OCCURED CREATING DIR:', err)
        : console.log('Dir created')
    })
  }
  //Directory path to write the file if cretated
  function writeFileSync(targetPath, data) {}
  try {
    const directory = await ensureDirExists(targetPath)
    // console.log('4- Target directory path to write:', directory)
    // console.log('FYLE-TYPE:', fileType)

    fs.appendFile(
      `${directory}/${fileType}`,
      JSON.stringify(data),
      function (err) {
        return err
          ? new Error("Couldn't create the file", err)
          : { message: 'File is created successfully.' }
      }
    )
    return { message: 'Data wrote succesfully' }
  } catch (err) {
    throw new Error(`Error writing file directory`, {
      cause: err,
      cause: err,
      code: err.code,
    })
  }
}
