$("#sidebar a").each((index, element) => {
    $(element).attr("target", "_blank");
});

$("#hamburger").on('click', () => {
    $("#sidebar").toggleClass("active");
    if ($("#sidebar").hasClass("active")) {
        $("#hamburger").html("<i class='fas fa-times'></i>");
        $("body").css("overflow", "hidden");
    } else {
        $("#hamburger").html("<i class='fas fa-bars'></i>");
        $("body").css("overflow", "");
    }
})
