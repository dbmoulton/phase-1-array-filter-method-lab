// function findMatching(collection, string) {
//   for (const drivers of collection) {
//     if (drivers.name === string) {
//       return (drivers.name);
//     }
//   }
// }

// function fuzzyMatch(array, string){

// }

function findMatching(array, string) {
   return array.filter((name) => name.toLowerCase() === string.toLowerCase())
}
function fuzzyMatch(array, string) {
  return array.filter((name) => name.startsWith(string))
 }
 function matchName(array, string) {
  return array.filter((obj) => obj.name == string)
}