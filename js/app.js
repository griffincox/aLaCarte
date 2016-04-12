$('form').submit(function () {
  //store value of text input
  var value = $('input[type=text]').val();
  $('ul').prepend('<li class="item">'+value+'</li>');
  $('input').val('');
  $('input').attr("placeholder", "");
  return false;
});
$('ul').on("click", ".item", function() {
  if ($(this).css("text-decoration") === "none") {
    console.log("text-decoration is none")
  $(this).css("text-decoration", "line-through")
    console.log("text-struckthrough")}
  else $(this).closest('li').remove()
    console.log("removed clicked on li")
  return false;
});
