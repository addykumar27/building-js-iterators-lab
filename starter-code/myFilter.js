// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Filter
function myFilter(arr, callback) {

function myFilter(arr, callback) {
  var outputArray = [];
  for (var i=0; i<arr.length; i++) {
    if (callback(arr[i], i, arr)){
      outputArray.push(arr[i]);
    }
  }
  return outputArray;
}
