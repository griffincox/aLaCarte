$('form').submit(function () {
  //store value of text input
  var value = $('input[type=text]').val();
  $('ul').prepend('<li>'+value+'</li>');
  $('input').val('');
  $('input').attr("placeholder", "")
  return false;
});
$('li').click(function() {
  alert:("handler for .click() called");
  $('li').css("text-decoration", "line-through");
});
