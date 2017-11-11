$(document).ready(function() {
  $("#ping form").submit(function(event) {
    var numInput = $("input#num-input").val();
    $("#output").text(numInput);
    $("#output").show();
    event.preventDefault();
 });
});
