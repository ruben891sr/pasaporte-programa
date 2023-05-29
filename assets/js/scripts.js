// Close Menu
function menuApp() {
    // Open
    $('.psAppPrograma--header-menu-icon').click(function () {
        $('.psAppPrograma--header-menu ul').addClass('right0');
    });
    // Close
    $('.psAppPrograma--header-menu-closeMobile').click(function () {
        $('.psAppPrograma--header-menu ul').removeClass('right0');
    });

}

$(document).ready(function () {
    menuApp();
});