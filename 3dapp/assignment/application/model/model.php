<?php
    class Model
    {
        public $dbhandle;
        
        public function __construct()
        {
            $dsn = 'sqlite:./db/data.db';
            
            try
            {
                $this->dbhandle = new PDO($dsn, 'user', 'password', array(
                                                            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                                                            PDO::ATTR_EMULATE_PREPARES => false,
                                                            ));
            }
            catch (PDOEXception $e)
            {
                echo "Can't connect to the database!";
                
                print new Exception($e->getMessage());
            }
        }
        
        public function dbCreateTable()
        {
            try
            {
                $this->dbhandle->exec("CREATE TABLE Model_3D (Id INTEGER PRIMARY KEY, x3dModelTitle TEXT, x3dCreationMethod TEXT, modelTitle TEXT, modelDate TEXT, modelNumber TEXT, modelProvenance TEXT, modelDescription TEXT, modelLink TEXT, modelImage TEXT);");
                $this->dbhandle->exec("CREATE TABLE Site_Data (Id INTEGER PRIMARY KEY, pageTitle TEXT, pageDescription TEXT);");
                return "Tables are successfully created inside data.db file";
            }
            catch (PD0EXception $e)
            {
                print new Exception($e->getMessage());
            }

            $this->dbhandle = NULL;
        }

        public function dbDropTable()
        {
            try
            {
                $this->dbhandle->exec("DROP TABLE Model_3D;");
                $this->dbhandle->exec("DROP TABLE Site_Data;");
                return "Tables have been dropped";
            }
            catch (PD0EXception $e)
            {
                print new Exception($e->getMessage());
            }

            $this->dbhandle = NULL;
        }
        
        public function dbInsertData()
        {
            $datafile = fopen("application/model/data.json", "r");
            $data = fread($datafile,filesize("application/model/data.json"));
            $json = json_decode($data, true)['pageTextData'];

            try
            {
                for ($i = 0; $i < 10; $i++)
                {
                    $this->dbhandle->exec(
                        "INSERT INTO Site_Data (Id, pageTitle, pageDescription)
                            VALUES (" . $i .
                            ", '" . $json[$i]['title'] .
                             "', '" . $json[$i]['description'] . "');");
                }

                for ($i = 10; $i < count($json); $i++)
                {
                    $this->dbhandle->exec(
                        "INSERT INTO Model_3D (Id, x3dModelTitle, x3dCreationMethod, modelTitle, modelDate, modelNumber, modelProvenance, modelDescription, modelLink, modelImage)
                            VALUES (" . $i . 
                            ", '" . $json[$i]['x3dModelTitle'] .
                             "', '" . $json[$i]['x3dCreationMethod'] .
                              "', '" . $json[$i]['title'] .
                               "', '" . $json[$i]['date'] .
                                "', '" . $json[$i]['number'] .
                                 "', '" . $json[$i]['provenance'] .
                                  "', '" . $json[$i]['description'] .
                                  "', '" . $json[$i]['link'] .
                                   "', '" . serialize($json[$i]['image']) . "');");
                }

                return "Data inserted successfully inside data.db";
            }
            catch(PD0EXception $e)
            {
                print new Exception($e->getMessage());
            }

            $this->dbhandle = NULL;
        }

        public function dbGetData()
        {
            try
            {
                $sql = 'SELECT * FROM Model_3D';
                $stmt = $this->dbhandle->query($sql);
                $result = null;
                $i=-0;

                while ($data = $stmt->fetch())
                {
                    $result['x3dData'][$i]['x3dModelTitle'] = $data['x3dModelTitle'];
                    $result['x3dData'][$i]['x3dCreationMethod'] = $data['x3dCreationMethod'];
                    $result['x3dData'][$i]['modelTitle'] = $data['modelTitle'];
                    $result['x3dData'][$i]['modelDate'] = $data['modelDate'];
                    $result['x3dData'][$i]['modelNumber'] = $data['modelNumber'];
                    $result['x3dData'][$i]['modelProvenance'] = $data['modelProvenance'];
                    $result['x3dData'][$i]['modelDescription'] = $data['modelDescription'];
                    $result['x3dData'][$i]['modelLink'] = $data['modelLink'];
                    $result['x3dData'][$i]['modelImage'] = unserialize($data['modelImage']);
                    $i++;
                }

                $sql = 'SELECT * FROM Site_Data';
                $stmt = $this->dbhandle->query($sql);
                $i=-0;

                while ($data = $stmt->fetch())
                {
                    $result['siteData'][$i]['pageTitle'] = $data['pageTitle'];
                    $result['siteData'][$i]['pageDescription'] = $data['pageDescription'];
                    $i++;
                }
            }
            catch (PD0EXception $e)
            {
                print new Exception($e->getMessage());
            }
            
            $this->dbhandle = NULL;
            
            return $result;
        }
        
        public function dbGetColumnData($column = null, $table = null)
        {
            try
            {
                $sql = 'SELECT ' . $column . ' FROM ' . $table . '';
                $stmt = $this->dbhandle->query($sql);
                $result = null;
                $i=-0;
                while ($data = $stmt->fetch())
                {
                    if ($column == 'modelImage')
                    {
                        $result[$i] = unserialize($data[$column]);
                    }
                    else
                    {
                        $result[$i] = $data[$column];
                    }
                    $i++;
                }
            }
            catch (PD0EXception $e)
            {
                print new Exception($e->getMessage());
            }

            $this->dbhandle = NULL;

            return $result;
        }
    }
?>