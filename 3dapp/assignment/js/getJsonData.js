// JavaScript Document
$(document).ready(function()
{

    //AJAX service request to get the main text data from the json data store
    $.getJSON('./index.php/apiGetJson', function(jsonObj)
    {
        // site data
        $('#title_home1').html('<h2>' + jsonObj.siteData[0].pageTitle + '<h2>');
        $('#description_home1').html('<p>' + jsonObj.siteData[0].pageDescription + '</p>');

        $('#title_home2').html('<h2>' + jsonObj.siteData[1].pageTitle + '<h2>');
        $('#description_home2').html('<p>' + jsonObj.siteData[1].pageDescription + '</p>');

        $('#title_about').html('<h2>' + jsonObj.siteData[2].pageTitle + '<h2>');
        $('#description_about').html('<p>' + jsonObj.siteData[2].pageDescription + '</p>');

        $('#title_models').html('<h2>' + jsonObj.siteData[3].pageTitle + '<h2>');
        $('#description_models').html('<p>' + jsonObj.siteData[3].pageDescription + '</p>');

        $('#title_gallery').html('<h2>' + jsonObj.siteData[4].pageTitle + '<h2>');
        $('#description_gallery').html('<p>' + jsonObj.siteData[4].pageDescription + '</p>');

        $('#title_beyond').html('<h2>' + jsonObj.siteData[5].pageTitle + '<h2>');
        $('#description_beyond').html('<p>' + jsonObj.siteData[5].pageDescription + '</p>');

        $('#title_statement').html('<h2>' + jsonObj.siteData[6].pageTitle + '<h2>');
        $('#description_statement').html('<p>' + jsonObj.siteData[6].pageDescription + '</p>');

        $('#title_references').html('<h2>' + jsonObj.siteData[7].pageTitle + '<h2>');
        $('#description_references').html('<p>' + jsonObj.siteData[7].pageDescription + '</p>');

        $('#title_download').html('<h2>' + jsonObj.siteData[8].pageTitle + '<h2>');
        $('#description_download').html('<p>' + jsonObj.siteData[8].pageDescription + '</p>');

        $('#title_sitemap').html('<h2>' + jsonObj.siteData[9].pageTitle + '<h2>');
        $('#description_sitemap').html('<p>' + jsonObj.siteData[9].pageDescription + '</p>');

        // x3d
        $('#x3dtitle_model1').html('<h2>' + jsonObj.x3dData[0].x3dModelTitle + '<h2>');
        $('#x3dcreationmethod_model1').html('<p>' + jsonObj.x3dData[0].x3dCreationMethod + '<p>');
        $('#title_model1').html('<h2>' + jsonObj.x3dData[0].modelTitle + '<h2>');
        $('#date_model1').html('<h3>' + jsonObj.x3dData[0].modelDate + '</h3>');
        $('#number_model1').html('<h3>' + jsonObj.x3dData[0].modelNumber + '</h3>');
        $('#provenance_model1').html('<h3>' + jsonObj.x3dData[0].modelProvenance + '</h3>');
        $('#link_model1').html('<h3>' + jsonObj.x3dData[0].modelLink + '</h3>');
        $('#description_model1').html('<p>' + jsonObj.x3dData[0].modelDescription + '</p>');

        $('#x3dtitle_model2').html('<h2>' + jsonObj.x3dData[1].x3dModelTitle + '<h2>');
        $('#x3dcreationmethod_model2').html('<p>' + jsonObj.x3dData[1].x3dCreationMethod + '<p>');
        $('#title_model2').html('<h2>' + jsonObj.x3dData[1].modelTitle + '<h2>');
        $('#date_model2').html('<h3>' + jsonObj.x3dData[1].modelDate + '</h3>');
        $('#number_model2').html('<h3>' + jsonObj.x3dData[1].modelNumber + '</h3>');
        $('#provenance_model2').html('<h3>' + jsonObj.x3dData[1].modelProvenance + '</h3>');
        $('#link_model2').html('<h3>' + jsonObj.x3dData[1].modelLink + '</h3>');
        $('#description_model2').html('<p>' + jsonObj.x3dData[1].modelDescription + '</p>');

        $('#x3dtitle_model3').html('<h2>' + jsonObj.x3dData[2].x3dModelTitle + '<h2>');
        $('#x3dcreationmethod_model3').html('<p>' + jsonObj.x3dData[2].x3dCreationMethod + '<p>');
        $('#title_model3').html('<h2>' + jsonObj.x3dData[2].modelTitle + '<h2>');
        $('#date_model3').html('<h3>' + jsonObj.x3dData[2].modelDate + '</h3>');
        $('#number_model3').html('<h3>' + jsonObj.x3dData[2].modelNumber + '</h3>');
        $('#provenance_model3').html('<h3>' + jsonObj.x3dData[2].modelProvenance + '</h3>');
        $('#link_model3').html('<h3>' + jsonObj.x3dData[2].modelLink + '</h3>');
        $('#description_model3').html('<p>' + jsonObj.x3dData[2].modelDescription + '</p>');

        $('#x3dtitle_model4').html('<h2>' + jsonObj.x3dData[3].x3dModelTitle + '<h2>');
        $('#x3dcreationmethod_model4').html('<p>' + jsonObj.x3dData[3].x3dCreationMethod + '<p>');
        $('#title_model4').html('<h2>' + jsonObj.x3dData[3].modelTitle + '<h2>');
        $('#date_model4').html('<h3>' + jsonObj.x3dData[3].modelDate + '</h3>');
        $('#number_model4').html('<h3>' + jsonObj.x3dData[3].modelNumber + '</h3>');
        $('#provenance_model4').html('<h3>' + jsonObj.x3dData[3].modelProvenance + '</h3>');
        $('#link_model4').html('<h3>' + jsonObj.x3dData[3].modelLink + '</h3>');
        $('#description_model4').html('<p>' + jsonObj.x3dData[3].modelDescription + '</p>');
    });
});