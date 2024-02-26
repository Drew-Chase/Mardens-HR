$("#sidebar a").each((index, element) => {
    $(element).attr("target", "_blank");
});

$("#hamburger").on('click', () => {
    if ($("#sidebar").hasClass("active")) {
        closeSidebar()
    } else {
        openSidebar()
    }
})

function closeSidebar() {
    $("#sidebar").removeClass("active");
    $("#hamburger").html("<i class='fas fa-bars'></i>");
    $("body").css("overflow", "");
}

function openSidebar() {
    $("#sidebar").addClass("active");
    $("#hamburger").html("<i class='fas fa-times'></i>");
    $("body").css("overflow", "hidden");
}