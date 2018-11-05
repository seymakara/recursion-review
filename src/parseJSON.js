// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  if(json[0] === '"'){
    return json.slice(1, -1)
  } else if(json[0] === "t"){
    if(json[1] === "r"){
      if(json[2] === "u"){
        if(json[3] === "e"){
          return true
        }
      }
    }
  } else if(json[0] === 'f') {
    if(json[1] === 'a') {
      if(json[2] === 'l') {
        if(json[3] === 's') {
          if(json[4] === 'e') {
            return false;
          }
        }
      }
    }
  }else if((json[0] >= '0' && json[0] <= '9') || (json[1] >= '0' && json[1] <= '9')){
    return Number(json)
  }else if(json[0] === "n"){
    if(json[1] === "u"){
      if(json[2] === "l"){
        if(json[3] === "l"){
          return null;
        }
      }
    }
  }else if(json[0] === "["){
    var resultArr = []
    for(var i = 1; i<json.length; i++){
      if(json[i] === '"'){
        resultArr.push(unStringifyString(json))
      }
    }
    return resultArr
  }

};

var unStringifyString = function(json){
  var str = ""
  var i = 1
  while(json[i] !== '"'){
    str += json[i]
    i += 1
  }
  return str
}


