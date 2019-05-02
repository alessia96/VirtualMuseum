// JavaScript Document
$(document).ready(function(){

    //AJAX service request to get the main text data from the json data store
    $.getJSON('./model/data.json', function(jsonObj) {
        console.log(jsonObj);

        $('#title_home1').html('<h2>' + jsonObj.pageTextData[0].title + '<h2>');
        $('#description_home1').html('<p>' + jsonObj.pageTextData[0].description + '</p>');

        $('#title_home2').html('<h2>' + jsonObj.pageTextData[1].title + '<h2>');
        $('#description_home2').html('<p>' + jsonObj.pageTextData[1].description + '</p>');

        $('#title_about').html('<h2>' + jsonObj.pageTextData[2].title + '<h2>');
        $('#subtitle_about').html('<h3>' + jsonObj.pageTextData[2].subtitle + '<h3>');
        $('#description_about').html('<p>' + jsonObj.pageTextData[2].description + '</p>');

        $('#title_gallery').html('<h2>' + jsonObj.pageTextData[3].title + '<h2>');
        $('#subtitle_gallery').html('<h3>' + jsonObj.pageTextData[3].subtitle + '<h3>');
        $('#description_gallery').html('<p>' + jsonObj.pageTextData[3].description + '</p>');

        $('#title_beyond').html('<h2>' + jsonObj.pageTextData[4].title + '<h2>');
        $('#subtitle_beyond').html('<h3>' + jsonObj.pageTextData[4].subtitle + '<h3>');
        $('#description_beyond').html('<p>' + jsonObj.pageTextData[4].description + '</p>');

        $('#title_references').html('<h2>' + jsonObj.pageTextData[5].title + '<h2>');
        $('#subtitle_references').html('<h3>' + jsonObj.pageTextData[5].subtitle + '<h3>');
        $('#description_references').html('<p>' + jsonObj.pageTextData[5].description + '</p>');

        $('#title_download').html('<h2>' + jsonObj.pageTextData[6].title + '<h2>');
        $('#subtitle_download').html('<h3>' + jsonObj.pageTextData[6].subtitle + '<h3>');
        $('#description_download').html('<p>' + jsonObj.pageTextData[6].description + '</p>');

        $('#title_sitemap').html('<h2>' + jsonObj.pageTextData[7].title + '<h2>');
        $('#subtitle_sitemap').html('<h3>' + jsonObj.pageTextData[7].subtitle + '<h3>');
        $('#description_sitemap').html('<p>' + jsonObj.pageTextData[7].description + '</p>');

        $('#x3dtitle_model1').html('<h2>' + jsonObj.pageTextData[8].x3dModelTitle + '<h2>');
        $('#x3dcreationmethod_model1').html('<p>' + jsonObj.pageTextData[8].x3dCreationMethod + '<p>');
        $('#title_model1').html('<h2>' + jsonObj.pageTextData[8].title + '<h2>');
        $('#subtitle_model1').html('<h3>' + jsonObj.pageTextData[8].subtitle + '</h3>');
        $('#description_model1').html('<p>' + jsonObj.pageTextData[8].description + '</p>');

        $('#x3dtitle_model2').html('<h2>' + jsonObj.pageTextData[9].x3dModelTitle + '<h2>');
        $('#x3dcreationmethod_model2').html('<p>' + jsonObj.pageTextData[9].x3dCreationMethod + '<p>');
        $('#title_model2').html('<h2>' + jsonObj.pageTextData[9].title + '<h2>');
        $('#subtitle_model2').html('<h3>' + jsonObj.pageTextData[9].subtitle + '</h3>');
        $('#description_model2').html('<p>' + jsonObj.pageTextData[9].description + '</p>');

        $('#x3dtitle_model3').html('<h2>' + jsonObj.pageTextData[10].x3dModelTitle + '<h2>');
        $('#x3dcreationmethod_model3').html('<p>' + jsonObj.pageTextData[10].x3dCreationMethod + '<p>');
        $('#title_model3').html('<h2>' + jsonObj.pageTextData[10].title + '<h2>');
        $('#subtitle_model3').html('<h3>' + jsonObj.pageTextData[10].subtitle + '</h3>');
        $('#description_model3').html('<p>' + jsonObj.pageTextData[10].description + '</p>');

        $('#x3dtitle_model4').html('<h2>' + jsonObj.pageTextData[11].x3dModelTitle + '<h2>');
        $('#x3dcreationmethod_model4').html('<p>' + jsonObj.pageTextData[11].x3dCreationMethod + '<p>');
        $('#title_model4').html('<h2>' + jsonObj.pageTextData[11].title + '<h2>');
        $('#subtitle_model4').html('<h3>' + jsonObj.pageTextData[11].subtitle + '</h3>');
        $('#description_model4').html('<p>' + jsonObj.pageTextData[11].description + '</p>');

        $('.title_gallery').html('<h2>' + jsonObj.pageTextData[12].galleryTitle + '<h2>');
        $('.description_gallery').html('<p>' + jsonObj.pageTextData[12].galleryDescription + '</p>');

        $('.x3dCameraTitle').html('<h2>' + jsonObj.pageTextData[13].CameraTitle + '<h2>');
        $('.x3dCameraSubtitle').html('<p>' + jsonObj.pageTextData[13].CameraSubtitle + '<p');

    });
});