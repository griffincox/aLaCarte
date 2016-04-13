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
  $(this).css("text-decoration", "line-through")
}
  else $(this).closest('li').toggle("fold").remove()
  $(".items-list li:last-of-type").css({"border-radius": "0 0 25px 25px", "border": "1px solid white"})
  return false;
});
$(function () {
  $("ul.items-list").sortable();
});
