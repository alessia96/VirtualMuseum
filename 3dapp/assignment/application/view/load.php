<?php
	// Load handles the requests of the Controller and loads the specific view requested
	class Load
	{

		function view($file_name, $data = null)
		{
			if (is_array($data))
			{
				extract($data);
			}
			
			include $file_name . '.php';
		}
	}

?>