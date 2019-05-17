<?php 
	// echo x3d models paths
    $result = "";

    for ($i = 0; $i < count($data); $i++)
    { 
        $result[$i] = "assets/x3d/" . $data[$i] . ".x3d" . "<br>";
        echo $result[$i];
    }
?>