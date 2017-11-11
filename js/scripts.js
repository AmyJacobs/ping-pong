var pingPong = function(input) {
  if (input%3 === 0) {
    return "ping";
  } else if (input%5 === 0) {
    return "pong";
  }
};

$(document).ready(function() {
  $("#ping form").submit(function(event) {
    var numInput = $("input#num-input").val();
    var numOutput = pingPong(numInput)
    $("#output").text(numOutput);
    $("#output").show();
    event.preventDefault();
 });
});
