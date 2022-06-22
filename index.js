function check() {
    let sidebarAndWrapper = $("#sidebar");
    if ($(document).width() < 600) { // use `===` and no quote around 783
      $("#icon-clickable").click(function () {
        sidebarAndWrapper.toggleClass("hide-sidebar");
      });
    }

    if ($(document).width() >= 600) { // use `===` and no quote around 783
      $("#icon-clickable").click(function () {
        sidebarAndWrapper.toggleClass("minimize-sidebar");
      });
    }
}

$(document).ready(function() {
  check();
});

$(window).resize(function () {  // no `on` here
  check();
});
