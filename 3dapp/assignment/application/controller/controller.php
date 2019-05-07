<?php
    class Controller
    {
        public $load;
        public $model;
        
        function __construct($pageURI = null)
        {
            $this->load = new Load(); 
            $this->model = new Model();
            
            $this->$pageURI();
        }

        function home()
        {
            $this->load->view('home');
        }
        
        // Create
        function apiCreateTable()
        {
            $data = $this->model->dbCreateTable();
            $this->load->view('viewMessage', $data);
        }

        // Update
        function apiInsertData()
        {
            $data = $this->model->dbInsertData();
            $this->load->view('viewMessage', $data);
        }

        // Delete
        function apiDropTable()
        {
            $data = $this->model->dbDropTable();
            $this->load->view('viewMessage', $data);
        }

        // Read (all)
        function apiGetJson()
        {
            $data = $this->model->dbGetData();
            $this->load->view('viewData', $data);
        }

        // Read (all fields of same property)
        function apiGetGalleryImages()
        {
            $data = $this->model->dbGetColumnData('modelImage', 'Model_3D');
            $this->load->view('viewGalleryImages', $data);
        }
    }
?>    