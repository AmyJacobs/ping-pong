var pingArray = []

var pingPong = function(input) {
  if (input%15 === 0) {
    return "pingpong";
  } else if (input%5 === 0) {
    return "pong";
  } else if (input%3 === 0) {
    return "ping";
  } else {
    for (var index = input; index >= 1; index -= 1) {
      pingArray.push(index + " ");

    }
    return pingArray;
  }
};

$(document).ready(function() {
  $("#ping form").submit(function(event) {
    var numInput = $("input#num-input").val();
    var numOutput = pingPong(numInput)
    $("#output").append(numOutput);
    $("#output").show();
    event.preventDefault();
 });
});
