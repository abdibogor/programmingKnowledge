<?php
require 'connect.php';

$query="SELECT * FROM  user_info";
if($is_query_run=mysql_query($query))
{
	echo "query executed";	 
	while($query_execute=mysql_fetch_assoc($is_query_run))
		{
	echo '<table style="width:300px, color:blue";><tr><td>'.$query_execute['Name'].'</td><td>'.$query_execute['Surname'].'</td></tr></table>' 
	//echo $query_execute['Name'].'<br>';		
		}
     }
else
	{
		echo "query not executed";
	}

?>