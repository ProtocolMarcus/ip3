//Backend logic
var newNumber = [];
var pingPong = function(number) {
  for (var i = 1; i <= number; i++) {
    newNumber.push(i);
    if (number % 15 === 0) {
      return "pingpong";
    } else if (number % 5 === 0) {
      return "pong";
    } else if (number % 3 === 0) {
      return "ping";
    }
  }
};



//frontend logic
$(document).ready(function() {
  $("#click").click(function(event) {
    event.preventDefault();
    console.log("am here");
    var number = parseInt($("input#number").val());
    var result = pingPong(number);
    newNumber.forEach(function(x) {
      $("#result").append("<li>" + x + "</li>");
    });
  });
});
