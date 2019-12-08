const requireModule = require.context('./', false, /\.js$/)
const APILIST = {}

function capitalizeFirstLetter (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

requireModule.keys().forEach(fileName => {
 const moduleName = capitalizeFirstLetter(fileName.replace(/(\.\/|\.js)/g, ''))
 APILIST[moduleName] = {
  ...requireModule(fileName).default
 }
})


export default APILIST
