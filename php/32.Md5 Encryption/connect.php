<?php
$mysql_host='localhost';
$mysql_user='root';
$mysql_password='root';


if(!@mysql_connect($mysql_host,$mysql_user,$mysql_password))
	{
	die('Cannot connect to database');
	}
	else 
	{
	if(@mysql_select_db('student'))
	{			
	 //echo 'Connection success';
	}
	else{
		die('Cannot connect to database');
		}	
	}
?>