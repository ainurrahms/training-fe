let sidebarAndWrapper = $("#sidebar");

$(window).on('resize', function(){
    var win = $(this); //this = window
    if (win.width() < 600) {
      $("#icon-clickable").click(function () {
        sidebarAndWrapper.toggleClass("hide-sidebar");
      });
    }else{
      $("#icon-clickable").click(function () {
        sidebarAndWrapper.toggleClass("minimize-sidebar");
      });
    }
});