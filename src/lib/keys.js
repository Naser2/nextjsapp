const isDevelopment = process.env.NODE_ENV === 'development' ? true : false
const isProduction = process.env.NODE_ENV === 'production' ? true : false

let NAME = process.env.NAME
let TITLE = process.env.TITLE
let PROJECT_ID = process.env.PROJECT_ID
let DATA_SET = process.env.DATA_SET

export { NAME, PROJECT_ID, TITLE, DATA_SET }
const KeysProvider = () => {
  if (isDevelopment) {
    console.log('isDevelopment:', isDevelopment)
    let NAME = process.env.NAME
    let TITLE = process.env.TITLE
    let PROJECT_ID = process.env.PROJECT_ID
    let DATA_SET = process.env.DATA_SET
    return { PROJECT_ID, TITLE, NAME, DATA_SET }
    // console.log('Development Keys:')
  } else {
    console.log('isProduction:', isProduction)

    console.log('Production Keys:', keys)
    let NAME = process.env.NAME
    let TITLE = process.env.TITLE
    let PROJECT_ID = process.env.PROJECT_ID
    let DATA_SET = process.env.DATA_SET
    return { PROJECT_ID, TITLE, NAME, DATA_SET }
  }
}

export default KeysProvider
