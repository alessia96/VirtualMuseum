// handle 3D model and data swapping from paths received from apiGet3DModelsPath
$(document).ready(function()
{
    $.get("./index.php/apiGet3DModelsPath", function(response)
    {
        var res = response.split("<br>");

        $('.link').click(function ()
        {
            if($(this).attr('id') == 'btn0')
            {
                $('#3dcanvas').attr('url', res[0]);
                $('#model-1-data').fadeIn(2000);
                $('#model-2-data').hide();
                $('#model-3-data').hide();
                $('#model-4-data').hide();
            }
            else if($(this).attr('id') == 'btn1')
            {
                $('#3dcanvas').attr('url', res[1]);
                $('#model-1-data').hide();
                $('#model-2-data').fadeIn(2000);
                $('#model-3-data').hide();
                $('#model-4-data').hide();
            }
            else if($(this).attr('id') == 'btn2')
            {
                $('#3dcanvas').attr('url', res[2]);
                $('#model-1-data').hide();
                $('#model-2-data').hide();
                $('#model-3-data').fadeIn(2000);
                $('#model-4-data').hide();
            }
            else if($(this).attr('id') == 'btn3')
            {
                $('#3dcanvas').attr('url', res[3]);
                $('#model-1-data').hide();
                $('#model-2-data').hide();
                $('#model-3-data').hide();
                $('#model-4-data').fadeIn(2000);
            }

            resetFog();
        });
    });
});

// change viewpoints
function changeView(selected)
{
    document.getElementById(selected).setAttribute('set_bind','true');
}

// toggle omni lights on and off
var on = true;
function toggleLights()
{
    on = !on;
    document.getElementById('omni1').setAttribute('on', on);
    document.getElementById('omni2').setAttribute('on', on);
    document.getElementById('omni3').setAttribute('on', on);
}

// toggle wireframe and vertex mode
function toggleWireframe()
{
    document.getElementById('model3D').runtime.togglePoints(true);
	document.getElementById('model3D').runtime.togglePoints(true);
}

// reset fog to maximum value
function resetFog()
{
    document.getElementById("fogInputSlider").setAttribute("value", 80000);
    document.getElementById("fogSlider").setAttribute("visibilityRange", 80000);
}

// set fog to desired value from input slider
function setFog()
{
    var value = document.getElementById("fogInputSlider").value;
    document.getElementById("fogSlider").setAttribute("visibilityRange", value);
}

// toggle animation of the currently loaded model
var animating = false;
var current = null;
function toggleAnimation()
{
    animating = !animating;
    current = document.getElementById("model__RevolverAnimation");
    if (current != null)
    {
        current.setAttribute('enabled', animating);
    }
    current = document.getElementById("model__PistolAnimation");
    if (current != null)
    {
        current.setAttribute('enabled', animating);
    }
    current = document.getElementById("model__RifleAnimation");
    if (current != null)
    {
        current.setAttribute('enabled', animating);
    }
    current = document.getElementById("model__SniperAnimation");
    if (current != null)
    {
        current.setAttribute('enabled', animating);
    }
}


