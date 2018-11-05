// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result =[];
  function findClass (elem) {
    if(elem.classList && elem.classList.contains(className)) {
      result.push(elem)
    }
    if(elem.childNodes) {
      for(var i = 0; i < elem.childNodes.length; i++) {
        findClass(elem.childNodes[i])
      }
    }
  }
  findClass(document.body)
  return result;
};
