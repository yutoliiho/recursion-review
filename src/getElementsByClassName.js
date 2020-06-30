// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

//  You should use document.body, element.childNodes, and element.classList

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  let body = document.body;
  let res = [];
  var findClassName = function (body) {
    if (body.classList && body.classList.contains(className)) {
      res.push(body);
      // console.log(res);
    }
    if (body.hasChildNodes()) {
      for (let i = 0; i < body.childNodes.length; i++) {
        findClassName(body.childNodes[i]);
      }
    }
  };
  findClassName(body);
  return res;
};
