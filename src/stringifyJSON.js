// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  var stringifyJSONs = JSON.stringify(obj);
  // your code goes here
  var res = '';
  // String, Boo, Number, undefined, null, array, obj

  // if array
  if (Array.isArray(obj)) {
    var result = [];
    for (var i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }
    res += '[' + result.join(',') + ']';

    //if string
  } else if (typeof obj === 'string') {
    res += '"' + obj + '"';
  } else if (
    typeof obj === 'number' ||
    typeof obj === 'boolean' ||
    obj === null
  ) {
    // Boo / Number / Null
    // res += obj;
    return '' + obj;
  }

  console.log(stringifyJSONs, res, typeof stringifyJSONs, typeof res);
  return res;
};
