$(document).ready(function()
{
    $('.header-right > a').click(function()
    {
        $(".hamburger-menu").show();
        $(".hamburger-menu").addclass('active');
    });
    $(".close").click(function()
    {
        $(".hamburger-menu").hide();
        $(".hamburger-menu").addclass('active');
    });
});