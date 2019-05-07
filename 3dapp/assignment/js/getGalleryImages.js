// JavaScript Document
$(document).ready(function()
{
    //AJAX service request to get the main text data from the json data store
    $.get("./index.php/apiGetGalleryImages", function(response)
    {
        var res = response.split("<br>");
        var htmlCode = '<div id="gallery-card">';
        
        for (var i = 0; i < res.length - 1; i++)
        {
            htmlCode += '<div class="card">';
            htmlCode += `<a href="${res[i]}" data-lightbox="example-set" data-title="Title"><img class="card-img-top" src="${res[i]}"/></a>`;
            htmlCode += '</div>';   
        }

        htmlCode += '</div>';

        $("#gallery_table").html(htmlCode);

        htmlCode = "";

        for (var i = 1; i < res.length - 1; i++)
        {
            htmlCode += `<img class="mySlides" src="${res[i]}" style="width:100%" style="display:block">`
        }

        htmlCode += '<br><button onclick="plusDivs(-1)">Prev</button><button onclick="plusDivs(1)">Next</button>';

        $("#slideshow_table").html(htmlCode);
    });
});