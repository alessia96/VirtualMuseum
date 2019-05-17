// handle formatting of JSON data (both site data and x3d) received from apiGetJson
$(document).ready(function()
{
    $.getJSON('./index.php/apiGetJson', function(jsonObj)
    {
        // site data
        $('#title_home1').html('<h2>' + jsonObj.siteData[0].pageTitle + '</h2>');
        $('#description_home1').html('<p>' + jsonObj.siteData[0].pageDescription + '</p>');

        $('#title_home2').html('<h2>' + jsonObj.siteData[1].pageTitle + '</h2>');
        $('#description_home2').html('<p>' + jsonObj.siteData[1].pageDescription + '</p>');

        $('#title_about').html('<h2>' + jsonObj.siteData[2].pageTitle + '</h2>');
        $('#description_about').html('<p>' + jsonObj.siteData[2].pageDescription + '</p>');

        $('#title_models').html('<h2>' + jsonObj.siteData[3].pageTitle + '</h2>');
        $('#description_models').html('<p>' + jsonObj.siteData[3].pageDescription + '</p>');

        $('#title_gallery').html('<h2>' + jsonObj.siteData[4].pageTitle + '</h2>');
        $('#description_gallery').html('<p>' + jsonObj.siteData[4].pageDescription + '</p>');

        $('#title_beyond').html('<h2>' + jsonObj.siteData[5].pageTitle + '</h2>');
        $('#description_beyond').html('<p>' + jsonObj.siteData[5].pageDescription + '</p>');

        $('#title_statement').html('<h2>' + jsonObj.siteData[6].pageTitle + '</h2>');
        $('#description_statement').html('<p>' + jsonObj.siteData[6].pageDescription + '</p>');

        $('#title_references').html('<h2>' + jsonObj.siteData[7].pageTitle + '</h2>');
        $('#description_references').html('<p>' + jsonObj.siteData[7].pageDescription + '</p>');

        $('#title_download').html('<h2>' + jsonObj.siteData[8].pageTitle + '</h2>');
        $('#description_download').html('<p>' + jsonObj.siteData[8].pageDescription + '</p>');

        $('#title_sitemap').html('<h2>' + jsonObj.siteData[9].pageTitle + '</h2>');
        $('#description_sitemap').html('<p>' + jsonObj.siteData[9].pageDescription + '</p>');

        // x3d
        $('#x3dcreationmethod_model1').html('<div class="smallprint"><i>' + jsonObj.x3dData[0].x3dCreationMethod + '</i></div>');
        $('#title_model1').html('<h4>' + jsonObj.x3dData[0].modelTitle + '</h4>');
        $('#date_model1').html('<p><b>Date</b>: ' + jsonObj.x3dData[0].modelDate + '</p>');
        $('#number_model1').html('<p><b>Number</b>: ' + jsonObj.x3dData[0].modelNumber + '</p>');
        $('#provenance_model1').html('<p><b>Provenance</b>: ' + jsonObj.x3dData[0].modelProvenance + '</p>');
        $('#link_model1').html('<p><a href="jsonObj.x3dData[0].modelLink"><b>Link</b></a></p>');
        $('#description_model1').html('<p><b>Description</b>: ' + jsonObj.x3dData[0].modelDescription + '</p>');

        $('#x3dcreationmethod_model2').html('<div class="smallprint"><i>' + jsonObj.x3dData[1].x3dCreationMethod + '</i></div>');
        $('#title_model2').html('<h4>' + jsonObj.x3dData[1].modelTitle + '</h4>');
        $('#date_model2').html('<p><b>Date</b>: ' + jsonObj.x3dData[1].modelDate + '</p>');
        $('#number_model2').html('<p><b>Number</b>: ' + jsonObj.x3dData[1].modelNumber + '</p>');
        $('#provenance_model2').html('<p><b>Provenance</b>: ' + jsonObj.x3dData[1].modelProvenance + '</p>');
        $('#link_model2').html('<p><a href="jsonObj.x3dData[1].modelLink"><b>Link</b></a></p>');
        $('#description_model2').html('<p><b>Description</b>: ' + jsonObj.x3dData[1].modelDescription + '</p>');

        $('#x3dcreationmethod_model3').html('<div class="smallprint"><i>' + jsonObj.x3dData[2].x3dCreationMethod + '</i></div>');
        $('#title_model3').html('<h4>' + jsonObj.x3dData[2].modelTitle + '</h4>');
        $('#date_model3').html('<p><b>Date</b>: ' + jsonObj.x3dData[2].modelDate + '</p>');
        $('#number_model3').html('<p><b>Number</b>: ' + jsonObj.x3dData[2].modelNumber + '</p>');
        $('#provenance_model3').html('<p><b>Provenance</b>: ' + jsonObj.x3dData[2].modelProvenance + '</p>');
        $('#link_model3').html('<p><a href="jsonObj.x3dData[2].modelLink"><b>Link</b></a></p>');
        $('#description_model3').html('<p><b>Description</b>: ' + jsonObj.x3dData[2].modelDescription + '</p>');

        $('#x3dcreationmethod_model4').html('<div class="smallprint"><i>' + jsonObj.x3dData[3].x3dCreationMethod + '</i></div>');
        $('#title_model4').html('<h4>' + jsonObj.x3dData[3].modelTitle + '</h4>');
        $('#date_model4').html('<p><b>Date</b>: ' + jsonObj.x3dData[3].modelDate + '</p>');
        $('#number_model4').html('<p><b>Number</b>: ' + jsonObj.x3dData[3].modelNumber + '</p>');
        $('#provenance_model4').html('<p><b>Provenance</b>: ' + jsonObj.x3dData[3].modelProvenance + '</p>');
        $('#link_model4').html('<p><a href="jsonObj.x3dData[3].modelLink"><b>Link</b></a></p>');
        $('#description_model4').html('<p><b>Description</b>: ' + jsonObj.x3dData[3].modelDescription + '</p>');
    });
});