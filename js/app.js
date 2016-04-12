$('form').submit(function () {
  //store value of text input
  var value = $('input[type=text]').val();
  $('ul').prepend('<li>'+value+'</li>');
  $('input').val('');
  $('input').attr("placeholder", "");
  return false;
});
$('li').click(function() {
  console.log("testing");
  $(this).css("text-decoration", "line-through")
});
