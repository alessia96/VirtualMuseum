function swap(selected)
{
    if (document.getElementById('home').style.display == 'block')
    {
        document.getElementById('main_3d_image').style.height = '150px';
        document.getElementById('main_3d_image').style.padding = '0px';
    }

    // First do not display all div id contents
    document.getElementById('home').style.display = 'none';
    document.getElementById('main_text').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('gallery').style.display = 'none';
    document.getElementById('going-beyond').style.display = 'none';
    document.getElementById('references').style.display = 'none';
    document.getElementById('download').style.display = 'none';
    document.getElementById('site-map').style.display = 'none';
    document.getElementById('model1').style.display = 'none';
    document.getElementById('model2').style.display = 'none';
    document.getElementById('model3').style.display = 'none';
    document.getElementById('model4').style.display = 'none';

    if (selected == 'home')
    {
        document.getElementById('main_3d_image').style.height = '500px';
        document.getElementById('main_3d_image').style.padding = '200px';
        document.getElementById('main_text').style.display = 'block';
    }

    // Then display the selected div id contents
    document.getElementById(selected).style.display = 'block';
}