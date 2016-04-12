$('form').submit(function () {
  //store value of text input
  var value = $('input[type=text]').val();
  $('ul').prepend('<li class="item">'+value+'</li>');
  $('input').val('');
  $('input').attr("placeholder", "");
  return false;
});
$('ul').on("click", ".item", function() {
  $(this).css("text-decoration", "line-through")
});
