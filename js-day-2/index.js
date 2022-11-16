// var x = 50;
// function foo(){
//     x = 20;
// }
// foo();
// console.log(x);

var a = 10;
(function() {
  var a = 15;
  window.x = function() {
    console.log(a);
  }
})();
x();