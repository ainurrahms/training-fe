let sidebarAndWrapper = $("#sidebar");

$(window).on('resize', function(){
    var win = $(this); //this = window
    if (win.width() < 600) {
      $("#icon-clickable").click(function () {
        sidebarAndWrapper.toggleClass("hide-sidebar");
      });
    }
    if (win.width() >= 600){
      console.log("masuk sini maze 610")
      $("#icon-clickable").click(function () {
        sidebarAndWrapper.toggleClass("minimize-sidebar");
      });
    }
});