function changeView(selected)
{
    document.getElementById(selected).setAttribute('set_bind','true');
}

function changeVisibleNode(nodeId)
{
    document.getElementById("switcher").setAttribute("whichChoice", nodeId);
}

var on = true;
function toggleLights()
{
    on = !on;
    document.getElementById('omni1').setAttribute('on', on);
    document.getElementById('omni2').setAttribute('on', on);
    document.getElementById('omni3').setAttribute('on', on);
}

function toggleWireframe()
{
    document.getElementById('model3D').runtime.togglePoints(true);
	document.getElementById('model3D').runtime.togglePoints(true);
}

function setFog()
{
    var value = document.getElementById("fogInputSlider").value;
    document.getElementById("fogSlider").setAttribute("visibilityRange", value);
}

var animating = false;
function toggleAnimation()
{
    animating = !animating;
    document.getElementById("model__RevolverAnimation").setAttribute('enabled', animating);
    document.getElementById("model__PistolAnimation").setAttribute('enabled', animating);
    document.getElementById("model__RifleAnimation").setAttribute('enabled', animating);
    document.getElementById("model__SniperAnimation").setAttribute('enabled', animating);
}