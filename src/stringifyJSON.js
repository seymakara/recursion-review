// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

/*
  if it is null || not an object{
    if it is a string{
      return '"' + obj + '"'
    }
    else{
      return '' + obj
    }
  }
  else if Array.isArray(obj){
    var str = ''
    for item in Array{  
        str += stringifyJSON(obj[i])  
    return '[' + str + ']'
        
    }
  else{
    str = ''
    for key in obj{
      str += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) 
    }
    return '{' + str + '}'
  }
}
*/

var stringifyJSON = function(obj) {
  if(typeof obj === 'string') {
    return '"' + obj + '"';

  } else if(obj === null) {
    return 'null';

  } else if (typeof obj !== 'object') {
    return '' + obj;

  } else if (Array.isArray(obj)) {
    var str = '';
    for(var i = 0; i < obj.length; i++) {
      str += stringifyJSON(obj[i]) + ','
    }
    return '[' + str.slice(0, str.length -1) + ']'

  } else {
    var str = '';
    for(var key in obj) {
      if(typeof obj[key] === 'function' || typeof obj[key] === 'undefined'){
        continue
      }
      str += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ','
    }
    return '{' + str.slice(0, str.length - 1) + '}';
  }

};
