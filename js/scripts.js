var pingPong = function(input) {
  if (input%3 === 0) {
    return "ping";
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
