$(document).ready(function () {
    $('.mega-menu-trigger').hover(
        function () {
            // Show the mega menu
            $(this).find('.mega-menu').stop(true, true).fadeIn(300);
        },
        function () {
            // Hide the mega menu and any open flyouts
            $(this).find('.mega-menu').stop(true, true).fadeOut(300);
            $('.flyout').stop(true, true).fadeOut(300);
        }
    );

    $('.flyout-trigger').hover(
        function () {
            // Show the flyout for this item
            $(this).find('.flyout').stop(true, true).fadeIn(300);
        },
        function () {
            // Hide the flyout for this item
            $(this).find('.flyout').stop(true, true).fadeOut(300);
        }
    );
});
