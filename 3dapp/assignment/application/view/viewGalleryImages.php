<?php 

    $result = "";

    for ($i = 0; $i < count($data); $i++)
    { 
        for ($j = 0; $j < count($data[$i]); $j++)
        {
            $result[$i][$j] = "assets/images/gallery/" . $data[$i][$j] . ".png" . "<br>";
            echo $result[$i][$j];
        }
    }
?>