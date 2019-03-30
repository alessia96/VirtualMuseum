function swap(selected)
{
    // First do not display all div id contents
    document.getElementById('home').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('model1').style.display = 'none';

    // Then display the selected div id contents
    document.getElementById(selected).style.display = 'block';
}