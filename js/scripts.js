//Backend logic
var newNumber = [];

function pingPong(userInput, newNumber) {
  for (i = 0; i <= userInput; i++) {
    // ping pong check logic
    if (i % 15 === 0) {
      newNumber.push("pingpong");
    } else if (i % 5 === 0) {
      newNumber.push("pong");
    } else if (i % 3 === 0) {
      newNumber.push("ping");
    } else {
      newNumber.push(i);
    }
  }
}

//frontend logic
$(document).ready(function() {
  $('#click').click(function(e) {
    e.preventDefault();
    var userInput = parseInt($('#user-number').val());
    // calling the function
    pingPong(userInput, newNumber);
    newNumber.forEach(function(number) {
      $('#result').append("<li>" + number + "</li>");
    });
    ('#user-number').val("");
  });
});
