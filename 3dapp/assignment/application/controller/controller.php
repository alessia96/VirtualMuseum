<?php
    // Controller class handles the traffic of requests to the Model and responses for the View.
    class Controller
    {
        public $load;
        public $model;
        
        // construct the Controller by creating a Load (to load views) and a Model
        function __construct($pageURI = null)
        {
            $this->load = new Load(); 
            $this->model = new Model();
            
            $this->$pageURI();
        }

        // redirect to home page
        function home()
        {
            $this->load->view('home');
        }
        
        // create tables
        function apiCreateTable()
        {
            $data = $this->model->dbCreateTable();
            $this->load->view('viewMessage', $data);
        }

        // update tables
        function apiInsertData()
        {
            $data = $this->model->dbInsertData();
            $this->load->view('viewMessage', $data);
        }

        // delete tables
        function apiDropTable()
        {
            $data = $this->model->dbDropTable();
            $this->load->view('viewMessage', $data);
        }

        // read all JSON data
        function apiGetJson()
        {
            $data = $this->model->dbGetData();
            $this->load->view('viewData', $data);
        }

        // read gallery images paths
        function apiGetGalleryImages()
        {
            $data = $this->model->dbGetColumnData('modelImage', 'Model_3D');
            $this->load->view('viewGalleryImages', $data);
        }

        // read x3d models paths
        function apiGet3DModelsPath()
        {
            $data = $this->model->dbGetColumnData('x3dModelTitle', 'Model_3D');
            $this->load->view('view3DModels', $data);
        }
    }
?>    