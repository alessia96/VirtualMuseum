$(document).ready(function()
{
    $('.navbar-brand').click(function ()
    {
        if($(this).attr('id') == 'home-link')
        {
            $('#home').fadeIn(2000);
            $('#about').hide();
            $('#models').hide();
            $('#gallery').hide();
            $('#site-map').hide();
            $('#extras').hide();
            $('#originality').hide();
            $('#references').hide();
            $('#downloads').hide();
        }
    });

    $('.sidebar-link').click(function ()
    {
        if($(this).attr('id') == 'about-link')
        {
            $('#home').hide();
            $('#about').fadeIn(2000);
            $('#models').hide();
            $('#gallery').hide();
            $('#site-map').hide();
            $('#extras').hide();
            $('#originality').hide();
            $('#references').hide();
            $('#downloads').hide();
        }
        else if($(this).attr('id') == 'models-link')
        {
            $('#home').hide();
            $('#about').hide();
            $('#models').fadeIn(2000);
            $('#gallery').hide();
            $('#site-map').hide();
            $('#extras').hide();
            $('#originality').hide();
            $('#references').hide();
            $('#downloads').hide();
        }
        else if($(this).attr('id') == 'gallery-link')
        {
            $('#home').hide();
            $('#about').hide();
            $('#models').hide();
            $('#gallery').fadeIn(2000);
            $('#site-map').hide();
            $('#extras').hide();
            $('#originality').hide();
            $('#references').hide();
            $('#downloads').hide();
        }
    });

    $('.footer-link').click(function ()
    {
        if($(this).attr('id') == 'extras-link')
        {
            $('#home').hide();
            $('#about').hide();
            $('#models').hide();
            $('#gallery').hide();
            $('#site-map').hide();
            $('#extras').fadeIn(2000);
            $('#originality').hide();
            $('#references').hide();
            $('#downloads').hide();
        }
        else if($(this).attr('id') == 'originality-link')
        {
            $('#home').hide();
            $('#about').hide();
            $('#models').hide();
            $('#gallery').hide();
            $('#site-map').hide();
            $('#extras').hide();
            $('#originality').fadeIn(2000);
            $('#references').hide();
            $('#downloads').hide();
        }
        else if($(this).attr('id') == 'downloads-link')
        {
            $('#home').hide();
            $('#about').hide();
            $('#models').hide();
            $('#gallery').hide();
            $('#site-map').hide();
            $('#extras').hide();
            $('#originality').hide();
            $('#references').hide();
            $('#downloads').fadeIn(2000);
        }
        else if($(this).attr('id') == 'references-link')
        {
            $('#home').hide();
            $('#about').hide();
            $('#models').hide();
            $('#gallery').hide();
            $('#site-map').hide();
            $('#extras').hide();
            $('#originality').hide();
            $('#references').fadeIn(2000);
            $('#downloads').hide();
        }
        else if($(this).attr('id') == 'site-map-link')
        {
            $('#home').hide();
            $('#about').hide();
            $('#models').hide();
            $('#gallery').hide();
            $('#site-map').fadeIn(2000);
            $('#extras').hide();
            $('#originality').hide();
            $('#references').hide();
            $('#downloads').hide();
        }
    });

    $('.gallery-nav').click(function ()
    {
        if($(this).attr('id') == 'slideshow-link')
        {
            $('#gallery_table').hide();
            $('#slideshow').fadeIn(2000);
        }
        else if($(this).attr('id') == 'cards-link')
        {
            $('#gallery_table').fadeIn(2000);
            $('#slideshow').hide();
        }
    });
});

function openNav()
{
    document.getElementById("mySidebar").style.width = "250px";
}

function closeNav()
{
    document.getElementById("mySidebar").style.width = "0";
}