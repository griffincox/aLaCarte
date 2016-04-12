$('form').submit(function () {
  //store value of text input
  var value = $('input[type=text]').val();
  $('ul').append('<li>'+value+'</li>');
  $('input').val('');
  $('input').attr("placeholder", "")
  return false;
});
