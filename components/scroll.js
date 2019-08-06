window.onbeforeunload = () => {
  window.scrollTo(0, 0);
}

$(document).ready(() => {
  $('#down').on('click', () => {
    $("html").scrollTop(0);
    $('html, body').animate({
      scrollTop: $(".main").offset().top
    }, 1000);
  });
});
