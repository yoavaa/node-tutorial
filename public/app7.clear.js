$(document).ready(function() {


$("#clear").click(function() {
    $.post("clear", function() {
        alert("data was cleared");
    })
});
});
