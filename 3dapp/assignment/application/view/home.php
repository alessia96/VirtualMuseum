<!DOCTYPE html>
<html lang="en">

<head>

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <!-- <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"> -->
    <link rel="stylesheet" href="css/bootstrap.css">

    <!-- X3DOM.css -->
    <link rel="stylesheet" type="text/css" href="css/x3dom.css">

    <!-- Lightbox -->
    <link rel="stylesheet" href="./packages/lightbox/dist/css/lightbox.min.css">

    <!-- Custom CSS -->
    <link rel="stylesheet" href="css/custom.css">
    <link rel="stylesheet" href="css/animista.css">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto" rel="stylesheet">
    
    <title>Firearms Virtual Museum</title>

</head>

<body>

<!-- Header -->
<nav class="navbar sticky-top navbar-expand-sm">
    <div class="container-fluid">
        <a class="navbar-brand"  id="home-link" href="#" onclick="closeNav()">
            <h1 class="tracking-in-expand">Firearms</h1>
            <p>Virtual Museum</p>
        </a>

        <button class="openBtn" type="button" onclick="openNav()">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="sidebar" id="mySidebar">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
            <a class="sidebar-link" id="about-link" href="#" onclick="closeNav()">About</a>
            <a class="sidebar-link" id="models-link" href="#" onclick="closeNav()">Models</a>
            <a class="sidebar-link" id="gallery-link" href="#" onclick="closeNav()">Gallery</a>
        </div>
    </div>
</nav>

<!-- Body -->
<div class="container-fluid">
    <div class="contents" id="main_3d_image">   
        <div id="main_text">
            <h1 class="tracking-in-expand">Firearms</h1>
            <h2>Virtual Museum</h2>
            <h3>
                <button class="sidebar-link" id="gallery-link" href="#" onclick="closeNav()">
                    View Gallery
                </button>
            </h3>
        </div>
    </div>

    <div class="contents" id="home" style="display: block;">
        <div id="title_home1" class="card-title homeText"></div>
        <br>

        <div class="slide-in-left" align="right">
            <img src="./assets/images/gallery/pistol_cam1.png" width="45%">
            <img src="./assets/images/gallery/rifle_cam2.png" width="45%">
        </div>
        
        <br>
        <div id="description_home1" class="card-body homeText"></div>
        <br>
        <div id="title_home2" class="card-title homeText"></div>
        <br>

        <div class="slide-in-right" align="left">
            <img src="./assets/images/gallery/revolver_cam2.png" width="45%">
            <img src="./assets/images/gallery/sniper_cam1.png" width="45%">
        </div>
        
        <br>
        <div id="description_home2" class="card-body homeText"></div> 
        <br>

        
    </div>

    <div class="contents" id="about" style="display: none;">
        <div class="row">
            <div class="col-sm-12">
                <div id="title_about" class="card-title sectionText"></div>
                <div id="description_about" class="card-body sectionText"></div>
            </div>
        </div>
    </div>

    <div class="contents" id="models" style="display: none;">
        <div id="title_models" class="card-title sectionText"></div>

        <div class="row">
            <div class="col-sm-12" id="model-view">
                <x3d id="model3D">
                    <scene>
                        <Viewpoint id='front' DEF='Camera003-86' description='Camera003-86' orientation='1 0 0 -0.04143' fieldOfView='0.6' position='0 37.31 2178' ></Viewpoint>
                        <Viewpoint id='right' DEF='Camera001-82' description='Camera001-82' orientation='-0.000228 -1 0.0001239 -0.9955' fieldOfView='0.6' position='1774 57.37 788.4'></Viewpoint>
                        <Viewpoint id='left' DEF='Camera002-84' description='Camera002-84' orientation='0.09816 0.9944 0.03984 -0.775' fieldOfView='0.6' position='-1674 53.19 1733'></Viewpoint>
                        <PointLight id='omni1' DEF='Omni001-45' location='0 590.1 823' radius='8286'></PointLight>
                        <PointLight id='omni2' DEF='Omni002-46' location='-918.9 -121.5 823' radius='8286'></PointLight>
                        <PointLight id='omni3' DEF='Omni003-47' location='950.8 -513.1 259.3' radius='8286'></PointLight>
                        <Fog id='fogSlider' color='1,1,1' fogType='LINEAR' visibilityRange='9000000' isActive='true'></Fog>

                        <Switch whichChoice="0" id="switcher">
                            <Transform>
                                <inline nameSpaceName="model" mapDEFToID="true" url="assets/x3d/2017_revolver.x3d"></inline>
                            </Transform>

                            <Transform>
                                <inline nameSpaceName="model" mapDEFToID="true" url="assets/x3d/2017_pistol.x3d"></inline>
                            </Transform>

                            <Transform>
                                <inline nameSpaceName="model" mapDEFToID="true" url="assets/x3d/2017_rifle.x3d"></inline>
                            </Transform>

                            <Transform>
                                <inline nameSpaceName="model" mapDEFToID="true" url="assets/x3d/2017_sniper.x3d"></inline>
                            </Transform>
                        </Switch>
                    </scene>
                </x3d>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12" align="center">
                <button type="button" class="btn btn-secondary" onclick="changeVisibleNode(0)">Revolver</button>
                <button type="button" class="btn btn-secondary" onclick="changeVisibleNode(1)">Pistol</button>
                <button type="button" class="btn btn-secondary" onclick="changeVisibleNode(2)">Rifle</button>
                <button type="button" class="btn btn-secondary" onclick="changeVisibleNode(3)">Sniper</button>
            </div>
        </div>

        <br>

        <div id="models-card" align="center">
            <div class="card" width="50%">
                Test
            </div>
        
            <div class="card justify-content-center" width="50%" align="right">
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-secondary" onclick="changeView('right')">Right</button>
                    <button type="button" class="btn btn-secondary" onclick="changeView('left')">Left</button>
                    <button type="button" class="btn btn-secondary" onclick="changeView('front')">Front</button>
                </div>

                <br>

                <button type="button" class="btn btn-secondary" onclick="toggleLights()">Toggle Lights</button><br>
                <button type="button" class="btn btn-secondary" onclick="toggleAnimation()">Toggle Animation</button><br>
                <button type="button" class="btn btn-secondary" onclick="toggleWireframe()">Toggle Wireframe</button><br>
                        
                <div role="group">
                    <h5>Fog Modifier</h5><br>
                    <input type="range" id="fogInputSlider" min="0" max="80000" step="1" value="80000" onchange="setFog()">
                </div>
            </div>
        </div>
    </div>

    <div class="contents" id="gallery" style="display: none;">
        <div class="row">
            <div class="col-sm-12" align="center">
                <div id="title_gallery" class="card-title sectionText"></div>
                <div id="description_gallery" class="card-body sectionText"></div>
                <br>
                <div class="btn-group" role="group">
                    <button class="gallery-nav" href="#" id="slideshow-link" onclick="closeNav()">Slideshow</button>
                    <button class="gallery-nav" href="#" id="cards-link" onclick="closeNav()">Cards</button>
                </div>

                <br>

                <div id="gallery_table" style="display: none">
                </div>

                <div class="container" align="center" id="slideshow" style="display: block">
                    <br>    
                    <img class="mySlides" src="./assets/images/gallery/revolver.png" style="width:100%" style="display:block">
                    <div id="slideshow_table"></div>
                    <br>
                </div>
            </div>
        </div>
    </div>

    <div class="contents" id="site-map" style="display: none;">
        <div class="row">
            <div class="col-sm-12">
                <div id="title_sitemap" class="card-title sectionText"></div>
                <div id="description_sitemap" class="card-body sectionText"></div>
            </div>
        </div>
    </div>

    <div class="contents" id="extras" style="display: none;">
        <div class="row">
            <div class="col-sm-12">
                <div id="title_beyond" class="card-title sectionText"></div>
                <div id="description_beyond" class="card-body sectionText"></div>
            </div>
        </div>
    </div>

    <div class="contents" id="originality" style="display: none;">
        <div class="row">
            <div class="col-sm-12">
                <div id="title_statement" class="card-title sectionText"></div>
                <div id="description_statement" class="card-body sectionText"></div>
            </div>
        </div>
    </div>

    <div class="contents" id="references" style="display: none;">
        <div class="row">
            <div class="col-sm-12">
                <div id="title_references" class="card-title sectionText"></div>
                <div id="description_references" class="card-body sectionText"></div>
            </div>
        </div>
    </div>

    <div class="contents" id="downloads" style="display: none;">
        <div class="row">
            <div class="col-sm-12">
                <div id="title_download" class="card-title sectionText"></div>
                <div id="description_download" class="card-body sectionText"></div>
            </div>
        </div>
    </div>

    <div class="contents" id="site-map" style="display: none;">
        <div class="row">
            <div class="col-sm-12">
                <div id="title_sitemap" class="card-title sectionText"></div>
                <div id="description_sitemap" class="card-body sectionText"></div>
            </div>
        </div>
    </div>

</div>

<!-- Footer -->
<div id="footer-pad">
    <footer>
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-12 col-md-6">
                    <a class="footer-link" id="extras-link" href="#">Extras</a><br>
                    <a class="footer-link" id="originality-link" href="#">Originality</a><br>
                    <a class="footer-link" id="downloads-link" href="#">Downloads</a>
                </div>
                <div class="col-xs-12 col-md-6">
                    <a class="footer-link" id="references-link" href="#">References</a><br>
                    <a class="footer-link" id="site-map-link" href="#">Site-Map</a><br>
                    <a class="footer-link" href="https://github.com/alessia96">GitHub</a><br><br>
                </div>
            </div>
        </div>
        <!-- Copyright -->
        <div class="footer-copyright fixed-bottom text-center">
            &copy; 2019 Copyright:
            <a href="https://github.com/alessia96">Alessia Nigretti</a>
        </div>
    </footer>
</div>


<!-- JavaScript Files-->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="js/jquery-3.2.1.js" crossorigin="anonymous"></script>
<script src="./packages/lightbox/dist/js/lightbox-plus-jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>

<!-- JavaScript to swap for SPA and restyle -->
<script src="js/contentSwap.js"></script>
<script src="js/getGalleryImages.js"></script>
<script src="js/getJsonData.js"></script>
<script src="js/modelInteraction.js"></script>
<script src="js/displaySlideShow.js"></script>

<!-- Include the x3dom JavaScript -->
<script type="text/javascript" src="js/x3dom.js"></script>
</body>
</html>