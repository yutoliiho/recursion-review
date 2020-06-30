// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

//  You should use document.body, element.childNodes, and element.classList

var getElementsByClassName = function (className) {
  let body = document.body;
  let res = [];
  function findClassName(body) {
    if (body.classList && body.classList.contains(className)) {
      res.push(body);
      console.log(body);
      // console.log(res);
    }
    if (body.hasChildNodes()) {
      for (let i = 0; i < body.childNodes.length; i++) {
        findClassName(body.childNodes[i]);
      }
    }
  }
  findClassName(body);
  return res;
};
